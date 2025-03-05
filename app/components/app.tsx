import { Html } from "@elysiajs/html";
import { RootLayout } from "./layout";

type Props = {
    title: string;
}

export function AppComponent({title}: Props) {
    return (
      <RootLayout>
        <div class="text-pink-500 text-2xl">{title}</div>
      </RootLayout>
    )
}