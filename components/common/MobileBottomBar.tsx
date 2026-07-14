'use client';

import { abrirWhatsApp, type WhatsAppContext } from '@/lib/whatsapp';

interface MobileBottomBarProps {
  context?: WhatsAppContext;
  label?: string;
}

export default function MobileBottomBar({
  context = 'geral',
  label = 'Agendar Consulta',
}: MobileBottomBarProps) {
  return (
    <div className="mobile-bottom-bar" id="mobileBottomBar">
      <button onClick={() => abrirWhatsApp(context, 'bottom-bar')} className="btn btn-primary btn-block">
        {label}
      </button>
    </div>
  );
}
