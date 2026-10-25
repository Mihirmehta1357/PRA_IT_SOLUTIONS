import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { ScrollToTop } from './components/common/ScrollToTop';

// 15 Dedicated Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesIndex } from './pages/ServicesIndex';
import { ServiceItInfrastructure } from './pages/services/ServiceItInfrastructure';
import { ServiceNetworking } from './pages/services/ServiceNetworking';
import { ServiceSecurity } from './pages/services/ServiceSecurity';
import { ServiceCctvAccessControl } from './pages/services/ServiceCctvAccessControl';
import { ServiceServersStorageBackup } from './pages/services/ServiceServersStorageBackup';
import { ServiceManagedItSupport } from './pages/services/ServiceManagedItSupport';
import { ServiceCorporateIt } from './pages/services/ServiceCorporateIt';
import { ServiceSoftwareDevelopment } from './pages/services/ServiceSoftwareDevelopment';
import { IndustryLogisticsIndustrialIt } from './pages/IndustryLogisticsIndustrialIt';
import { IndustriesIndex } from './pages/IndustriesIndex';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <ScrollToTop />
      <SiteHeader />
      <main id="main-content">
        <Routes>
          {/* Page 01 — Homepage */}
          <Route path="/" element={<Home />} />

          {/* Page 02 — About PRA */}
          <Route path="/about" element={<About />} />

          {/* Page 03 — All Services */}
          <Route path="/services" element={<ServicesIndex />} />

          {/* Page 04 — IT Infrastructure Management */}
          <Route path="/services/it-infrastructure" element={<ServiceItInfrastructure />} />

          {/* Page 05 — Networking and Connectivity */}
          <Route path="/services/networking" element={<ServiceNetworking />} />

          {/* Page 06 — Cybersecurity and Data Protection */}
          <Route path="/services/security" element={<ServiceSecurity />} />

          {/* Page 07 — CCTV, Surveillance and Access Control */}
          <Route path="/services/cctv-access-control" element={<ServiceCctvAccessControl />} />

          {/* Page 08 — Servers, Storage and Backup */}
          <Route path="/services/servers-storage-backup" element={<ServiceServersStorageBackup />} />

          {/* Page 09 — Managed IT Support and AMC */}
          <Route path="/services/managed-it-support" element={<ServiceManagedItSupport />} />

          {/* Page 10 — Corporate IT Hardware and Software */}
          <Route path="/services/corporate-it" element={<ServiceCorporateIt />} />

          {/* Page 11 — Software, Web and Mobile Development */}
          <Route path="/services/software-development" element={<ServiceSoftwareDevelopment />} />

          {/* Page 12 — Logistics and Industrial IT */}
          <Route path="/industries/logistics-industrial-it" element={<IndustryLogisticsIndustrialIt />} />

          {/* Page 13 — Industries We Serve */}
          <Route path="/industries" element={<IndustriesIndex />} />

          {/* Page 14 — Projects and Solution Scenarios */}
          <Route path="/projects" element={<Projects />} />

          {/* Page 15 — Contact and Request a Quote */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
