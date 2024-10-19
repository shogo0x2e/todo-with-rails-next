import GetTestField from "@/components/get-test-field";
import { WithApolloProvider } from "@/providers/with-apollo-provider";

export default function Home() {
  return (
    <main>
      <WithApolloProvider>
        <GetTestField />
      </WithApolloProvider>
    </main>
  );
}
