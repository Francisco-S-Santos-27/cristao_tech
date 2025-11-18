import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Biblia from "./pages/Biblia";
import BookPage from "./pages/BookPage";
import Devocionais from "./pages/Devocionais";
import Noticias from "./pages/Noticias";
import Tecnologia from "./pages/Tecnologia";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import AjudeNos from "./pages/AjudeNos";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieSettings from "./pages/CookieSettings";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biblia" element={<Biblia />} />
            <Route path="/biblia/:bookName" element={<BookPage />} />
            <Route path="/devocionais" element={<Devocionais />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/ajude-nos" element={<AjudeNos />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookieSettings />} />
            <Route path="/termos" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
