import { OverlayProvider } from 'overlay-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// app layers
import { AppRouter } from './routers';
import { queryClientConfig } from './config';
import './styles';

function App() {
  const queryClient = new QueryClient(queryClientConfig);

  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <AppRouter />
      </OverlayProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
