export interface Piercing {
  nome: string;
  desc: string;
  cicatriza: string;
  joia: string;
}

export type PiercingCategory = 'orelha' | 'nariz' | 'boca' | 'corpo' | 'lingua' | 'troca';

export const piercingData: Record<PiercingCategory, Piercing[]> = {
  orelha: [
    { nome: 'Lóbulo', desc: 'O clássico, na parte macia da orelha.', cicatriza: '6 a 8 semanas', joia: 'Titânio ou aço' },
    { nome: 'Hélix', desc: 'Na cartilagem da borda superior da orelha.', cicatriza: '3 a 6 meses', joia: 'Titânio ou aço' },
    { nome: 'Anti-Hélix', desc: 'Na cartilagem oposta ao hélix, na borda interna.', cicatriza: '3 a 6 meses', joia: 'Titânio ou aço' },
    { nome: 'Tragus', desc: 'Na saliência à frente do canal auditivo.', cicatriza: '3 a 6 meses', joia: 'Titânio ou aço' },
    { nome: 'Daith', desc: 'Na dobra interna da cartilagem da orelha.', cicatriza: '4 a 9 meses', joia: 'Titânio ou aço' },
    { nome: 'Rook', desc: 'No topo da dobra cartilaginosa interna da orelha.', cicatriza: '4 a 9 meses', joia: 'Titânio ou aço' },
    { nome: 'Conch', desc: 'No centro da concha da orelha.', cicatriza: '3 a 9 meses', joia: 'Titânio ou aço' },
    { nome: 'Industrial', desc: 'Duas perfurações ligadas por uma barra.', cicatriza: '6 a 12 meses', joia: 'Titânio ou aço' },
  ],
  nariz: [
    { nome: 'Narina', desc: 'A lateral do nariz, clássico e discreto.', cicatriza: '2 a 4 meses', joia: 'Titânio ou aço' },
    { nome: 'Narina Dupla', desc: 'Piercings em ambas as narinas, efeito simétrico.', cicatriza: '2 a 4 meses', joia: 'Titânio ou aço' },
    { nome: 'Septo', desc: 'No centro, entre as narinas.', cicatriza: '6 a 8 semanas', joia: 'Titânio ou aço' },
    { nome: 'Bridge', desc: 'Na ponte do nariz, entre os olhos (superficial).', cicatriza: '8 a 12 semanas', joia: 'Titânio ou aço' },
  ],
  boca: [
    { nome: 'Labret', desc: 'Abaixo do lábio inferior, no centro.', cicatriza: '6 a 8 semanas', joia: 'Titânio ou aço' },
    { nome: 'Labret Vertical', desc: 'Atravessando o lábio inferior de forma vertical.', cicatriza: '8 a 12 semanas', joia: 'Titânio ou aço' },
    { nome: 'Medusa', desc: 'Acima do lábio superior, no centro (philtrum).', cicatriza: '8 a 12 semanas', joia: 'Titânio ou aço' },
    { nome: 'Monroe', desc: 'Lateral acima do lábio, estilo pintinha.', cicatriza: '8 a 12 semanas', joia: 'Titânio ou aço' },
    { nome: 'Sobrancelha', desc: 'Vertical na sobrancelha.', cicatriza: '6 a 8 semanas', joia: 'Titânio ou aço' },
  ],
  corpo: [
    { nome: 'Umbigo', desc: 'Na borda superior do umbigo.', cicatriza: '6 a 12 meses', joia: 'Titânio ou aço' },
    { nome: 'Microdermal', desc: 'Implante de superfície, ancorado na pele.', cicatriza: 'Varia', joia: 'Titânio ou aço' },
    { nome: 'Mamilo', desc: 'Piercing no mamilo.', cicatriza: '6 a 12 meses', joia: 'Titânio ou aço' },
  ],
  lingua: [
    { nome: 'Língua (central)', desc: 'Vertical no centro da língua.', cicatriza: '4 a 6 semanas', joia: 'Titânio ou aço' },
    { nome: 'Smiley', desc: 'No freio do lábio superior (efeito sorriso).', cicatriza: '4 a 8 semanas', joia: 'Titânio ou aço' },
  ],
  troca: [
    { nome: 'Troca / Upgrade de Joia', desc: 'Substitua por titânio, aço cirúrgico, pedras e zircônias.', cicatriza: 'N/A', joia: 'Titânio, aço ou pedra' },
  ],
};

export const FILTER_LABELS: { key: 'todos' | PiercingCategory; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'orelha', label: 'Orelha' },
  { key: 'nariz', label: 'Nariz' },
  { key: 'boca', label: 'Boca & Rosto' },
  { key: 'corpo', label: 'Corpo' },
  { key: 'lingua', label: 'Língua' },
];
