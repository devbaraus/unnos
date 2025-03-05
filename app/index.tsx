import { staticPlugin } from "@elysiajs/static"
import { Elysia, t } from 'elysia'
import { AppComponent } from './components/app'

import { html, Html } from '@elysiajs/html'

new Elysia()
    .use(html())
    .use(staticPlugin({
      assets: 'app/public',
      headers: {
        // disable caching
        'Cache-Control': 'no-store'
        // enable caching 
        // 'Cache-Control': 'public, max-age=31536000'
      }
    }))
    .get('/', async  ({query}) => {
    return <AppComponent title={query.hello}/>}, {
      query: t.Object({
        hello: t.String()
      })
    })
    .post('/form', ({ body }) => body)
    .listen(4000, () => console.log('Server running on port http://localhost:4000'))