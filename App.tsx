
import React, { useState } from 'react';
import { 
  Smartphone, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Package,
  ShoppingBag,
  Monitor,
  Search,
  ChevronRight,
  Sparkles,
  Target,
  Rocket,
  XCircle,
  Store,
  Building2,
  DollarSign,
  Mail,
  MapPin,
  MessageSquare,
  FileSearch,
  UserCheck,
  Map,
  Trophy
} from 'lucide-react';
// Added Variants type to import for strict typing of motion variants
import { motion, AnimatePresence, useScroll, useMotionValueEvent, Variants } from 'framer-motion';

// --- Utility Components ---

const ImagePlaceholder = ({ className = "", label = "IMAGEM" }: { className?: string, label?: string }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center group ${className}`}>
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    <div className="flex flex-col items-center gap-3 z-10 transition-transform duration-700 group-hover:scale-110">
      <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/10">
        <Sparkles size={24} />
      </div>
      <span className="text-[10px] tracking-widest font-black text-white/10 uppercase">{label}</span>
    </div>
    <motion.div 
      initial={{ top: "-100%" }}
      animate={{ top: "200%" }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-lime-custom/5 to-transparent pointer-events-none"
    />
  </div>
);

// --- Sections ---

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 90 }}
            className="w-10 h-10 bg-lime-custom rounded-xl flex items-center justify-center font-black text-black text-xs shadow-[0_0_15px_rgba(140,198,63,0.3)]"
          >
            CRO
          </motion.div>
          <span className="text-white font-black text-2xl tracking-tighter">CROCASE</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-widest text-white/40">
          {['Mercado', 'Diferenciais', 'Modelos', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-lime-custom transition-colors cursor-pointer">{item}</a>
          ))}
        </div>

        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#contato" 
          className="bg-lime-custom text-black font-black px-7 py-3 rounded-full shadow-lg shadow-lime-custom/20 transition-all text-xs uppercase tracking-widest flex items-center gap-2"
        >
          QUERO SER UM FRANQUEADO <ArrowRight size={14} />
        </motion.a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  // Explicitly typing variants to avoid inference issues with nested properties
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Using 'as const' for ease to narrow the type from string to specific Easing values
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 overflow-hidden grid-pattern">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-lime-custom/10 blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-[0.2em] text-lime-custom uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-lime-custom animate-pulse shadow-[0_0_10px_rgba(140,198,63,1)]"></span>
            Presença Nacional • 24 Estados
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight text-white"
          >
            Seja dono de uma <span className="text-lime-custom">franquia</span> no mercado que não para de crescer
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/50 text-xl mb-12 max-w-xl leading-relaxed font-medium"
          >
            A Crocase é a maior rede de assistência e acessórios para smartphones do Brasil. Modelo testado, validado e com alta rentabilidade.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              href="#contato"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-lime-custom text-black font-black px-10 py-5 rounded-2xl text-lg hover:shadow-[0_10px_40px_rgba(140,198,63,0.3)] transition-all flex items-center gap-3"
            >
              Baixar Apresentação <ArrowRight size={22} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative perspective-1000 hidden lg:block"
        >
          <ImagePlaceholder className="aspect-square w-full max-w-lg mx-auto shadow-2xl" label="VISTA 3D DA LOJA CONCEITO" />
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-6 rounded-[2rem] border border-white/20 glow-lime"
          >
            <div className="text-lime-custom font-black text-3xl">2024</div>
            <div className="text-[10px] text-white/50 font-black uppercase tracking-widest">Inovação Constante</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MarketStats = () => (
  <section id="mercado" className="py-24 px-6 relative bg-[#0d0d0d]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Um mercado que não para de crescer</h2>
        <p className="text-white/40 text-lg">Dados do setor que comprovam a solidez do seu investimento</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Smartphone />, val: "+240", label: "Milhões de aparelhos" },
          { icon: <Monitor />, val: "1.2", label: "Aparelhos por habitante" },
          { icon: <Package />, val: "+49 mi", label: "Tablets vendidos" },
          { icon: <TrendingUp />, val: "Alta", label: "Demanda constante" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-lime-custom mb-6 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className="text-4xl font-black text-white mb-2">{stat.val}</div>
            <div className="text-white/40 text-xs font-black uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AuthoritySection = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
          Uma marca <span className="text-lime-custom">consolidada</span> e em expansão
        </h2>
        <p className="text-white/50 text-xl leading-relaxed mb-10">
          A Crocase não é apenas uma loja de acessórios. Somos referência técnica e líderes em atendimento no mercado brasileiro, com uma logística impecável.
        </p>
        <div className="space-y-6">
          {[
            "Modelo de negócio validado e seguro",
            "Logística de ponta a ponta",
            "Marca reconhecida nacionalmente"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-white font-bold">
              <div className="w-6 h-6 rounded-full bg-lime-custom flex items-center justify-center text-black">
                <CheckCircle2 size={16} />
              </div>
              {item}
            </div>
          ))}
        </div>
      </motion.div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { val: "+5.000", label: "Clientes Ativos", bg: "bg-white/5" },
          { val: "2020", label: "Desde o Início", bg: "bg-white/5" },
          { val: "24", label: "Estados Presentes", bg: "bg-white/5" },
          { val: "Líder", label: "No Segmento", bg: "bg-lime-custom", text: "text-black" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`${item.bg} p-10 rounded-3xl border border-white/5 flex flex-col justify-center`}
          >
            <div className={`text-4xl font-black mb-2 ${item.text || 'text-lime-custom'}`}>{item.val}</div>
            <div className={`text-[10px] font-black uppercase tracking-widest ${item.text ? 'text-black/60' : 'text-white/30'}`}>{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section id="diferenciais" className="py-24 px-6 bg-[#0d0d0d]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black text-white mb-4">Por que escolher a Crocase?</h2>
        <p className="text-white/40">Diferenciais que tornam a unidade franqueada um case de sucesso</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Package />, title: "Estoque automático", desc: "Reposição inteligente baseada em dados. Você nunca fica sem o que mais vende." },
          { icon: <Zap />, title: "Mix personalizado", desc: "Acessórios que conversam com seu público regional para maximizar as vendas." },
          { icon: <ShieldCheck />, title: "Suporte de gestão", desc: "Acompanhamento direto para que sua loja atinja os melhores resultados mensais." },
          { icon: <ShoppingBag />, title: "Catálogo validado", desc: "Produtos selecionados com garantia e alta margem de lucro em cada venda." },
          { icon: <Users />, title: "Não precisa ser técnico", desc: "Nós treinamos sua equipe para todos os processos e reparos básicos." },
          { icon: <TrendingUp />, title: "Capacitação contínua", desc: "Treinamentos constantes presenciais e on-line para você e sua equipe." },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -10 }}
            className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 group hover:border-lime-custom/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-lime-custom mb-6 group-hover:bg-lime-custom group-hover:text-black transition-all">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { 
      id: "01", 
      icon: <FileSearch />, 
      title: "Inscrição Inicial", 
      desc: "Preencha seus dados para que nosso time de expansão inicie o primeiro contato estratégico." 
    },
    { 
      id: "02", 
      icon: <UserCheck />, 
      title: "Análise de Perfil", 
      desc: "Reunião de alinhamento para validar seu potencial como franqueado e metas de negócio." 
    },
    { 
      id: "03", 
      icon: <Map />, 
      title: "Validação de Ponto", 
      desc: "Auxiliamos na escolha e aprovação técnica do melhor ponto comercial para sua unidade." 
    },
    { 
      id: "04", 
      icon: <Trophy />, 
      title: "Inauguração & Sucesso", 
      desc: "Implantação guiada, treinamento de equipe e abertura oficial da sua nova franquia." 
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-black overflow-hidden">
      {/* Decorative Lines/Curves background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 400C200 100 600 700 900 400C1200 100 1540 400 1540 400" stroke="#8cc63f" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lime-custom font-black text-xs uppercase tracking-[0.3em] mb-4"
            >
              Caminho para o Sucesso
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Sua jornada de franqueado em <span className="text-lime-custom">4 passos</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg max-w-sm"
          >
            Entenda o processo transparente da Crocase para transformar você em um empresário do setor mobile.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector for Desktop */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-12 left-[100%] w-full h-px border-t border-dashed border-white/10 -z-10 group-hover:border-lime-custom/30 transition-colors"></div>
              )}

              <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 h-full transition-all duration-500 hover:bg-white/[0.05] hover:border-lime-custom/30 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Background ID number */}
                <div className="absolute -top-4 -right-2 text-9xl font-black text-white/[0.02] group-hover:text-lime-custom/[0.05] transition-colors pointer-events-none italic">
                  {item.id}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-lime-custom rounded-2xl flex items-center justify-center text-black mb-10 shadow-lg shadow-lime-custom/10 group-hover:shadow-lime-custom/30 group-hover:scale-110 transition-all duration-500">
                    {/* Fixed React.cloneElement by specifying generic type to allow 'size' prop */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-6 group-hover:text-lime-custom transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-lime-custom w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action within section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <a href="#contato" className="group flex items-center gap-4 text-white font-bold hover:text-lime-custom transition-all">
            <span>Começar minha inscrição agora</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-lime-custom group-hover:bg-lime-custom group-hover:text-black transition-all">
              <ChevronRight size={18} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ProfileCheck = () => (
  <section className="py-24 px-6 bg-[#0d0d0d]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">A franquia Crocase é para você?</h2>
        <p className="text-white/40">Identifique-se com nosso perfil de parceiro ideal</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-[2.5rem] bg-lime-custom text-black"
        >
          <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
            <CheckCircle2 size={28} /> É para você se...
          </h3>
          <ul className="space-y-6">
            {[
              "Deseja empreender em um mercado resiliente a crises",
              "Busca suporte de quem já trilhou o caminho do sucesso",
              "Tem espírito empreendedor e foco em resultados",
              "Valoriza processos estruturados e organizados"
            ].map((text, i) => (
              <li key={i} className="flex gap-4 font-bold text-black/80">
                <span className="font-black">✓</span> {text}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-[2.5rem] bg-white/[0.03] text-white border border-white/10"
        >
          <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
            <XCircle className="text-red-500" size={28} /> Não é para você se...
          </h3>
          <ul className="space-y-6">
            {[
              "Busca retorno financeiro milagroso da noite para o dia",
              "Não gosta de lidar com pessoas ou atendimento ao cliente",
              "Quer apenas investir sem se envolver no negócio",
              "Não segue padrões ou manuais de marca"
            ].map((text, i) => (
              <li key={i} className="flex gap-4 font-bold text-white/40">
                <span className="text-red-500 font-black">✕</span> {text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const InvestmentModels = () => {
  const models = [
    {
      title: "Rua Basic",
      icon: <Store />,
      investment: "R$ 141 mil",
      revenue: "R$ 30 mil/mês",
      profit: "30%",
      highlight: false
    },
    {
      title: "Rua Prime",
      icon: <Store />,
      investment: "R$ 186 mil",
      revenue: "R$ 40 mil/mês",
      profit: "37%",
      highlight: true
    },
    {
      title: "Shopping",
      icon: <Building2 />,
      investment: "R$ 199 mil",
      revenue: "R$ 52 mil/mês",
      profit: "22%",
      highlight: false
    },
    {
      title: "Shopping Prime",
      icon: <Building2 />,
      investment: "R$ 224 mil",
      revenue: "R$ 70 mil/mês",
      profit: "22%",
      highlight: false
    }
  ];

  return (
    <section id="modelos" className="py-24 px-6 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lime-custom font-black text-xs uppercase tracking-[0.3em] mb-4">MODALIDADES</p>
          <h2 className="text-5xl font-black text-white mb-6">Modelos de investimento</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Escolha o modelo que melhor se encaixa no seu perfil e capital disponível.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative p-8 rounded-[2rem] border transition-all duration-300 ${
                model.highlight 
                ? 'bg-lime-custom text-black border-lime-custom shadow-[0_20px_40px_rgba(140,198,63,0.15)]' 
                : 'bg-[#222222] text-white border-white/5'
              }`}
            >
              {/* Icon Square */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${
                model.highlight ? 'bg-black/10' : 'bg-lime-custom/20 text-lime-custom'
              }`}>
                {/* Fixed React.cloneElement by specifying generic type to allow 'size' prop */}
                {React.cloneElement(model.icon as React.ReactElement<any>, { size: 24 })}
              </div>

              <h3 className="text-2xl font-black mb-8 leading-tight">{model.title}</h3>

              {/* Data Rows */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 ${model.highlight ? 'text-black/40' : 'text-lime-custom'}`}>
                    <DollarSign size={16} />
                  </div>
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${model.highlight ? 'text-black/40' : 'text-white/20'}`}>
                      Investimento
                    </p>
                    <p className="text-xl font-black leading-none">{model.investment}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`mt-1 ${model.highlight ? 'text-black/40' : 'text-lime-custom'}`}>
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${model.highlight ? 'text-black/40' : 'text-white/20'}`}>
                      Faturamento médio
                    </p>
                    <p className="text-xl font-black leading-none">{model.revenue}</p>
                  </div>
                </div>
              </div>

              <div className={`w-full h-px mb-8 ${model.highlight ? 'bg-black/10' : 'bg-white/5'}`}></div>

              <div className="text-center">
                <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${model.highlight ? 'text-black/40' : 'text-white/20'}`}>
                  Rentabilidade média
                </p>
                <div className={`text-4xl font-black ${model.highlight ? 'text-black' : 'text-lime-custom'}`}>
                  {model.profit}
                </div>
              </div>

              {model.highlight && (
                <div className="absolute inset-0 rounded-[2rem] glow-lime opacity-50 pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <section id="contato" className="py-24 px-6 relative bg-black overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-custom/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-[3.5rem] border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Column - Info & Social Proof */}
            <div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="mb-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-lime-custom/20 bg-lime-custom/5 text-[9px] font-black tracking-[0.3em] text-lime-custom uppercase"
                >
                  Expansão Crocase 2024
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6">
                  Pronto para o <span className="text-lime-custom">próximo nível?</span>
                </h2>
                <p className="text-white/40 text-lg leading-relaxed font-medium">
                  Preencha o formulário e nossa equipe de expansão entrará em contato em até 24h com a apresentação detalhada do negócio.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <CheckCircle2 className="text-lime-custom" />, title: "Análise de praça exclusiva", desc: "Estudo de viabilidade da sua região." },
                  { icon: <CheckCircle2 className="text-lime-custom" />, title: "COF completa", desc: "Circular de Oferta de Franquia com total transparência." },
                  { icon: <CheckCircle2 className="text-lime-custom" />, title: "Suporte especializado", desc: "Consultoria personalizada para o seu capital." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold text-base">{item.title}</h4>
                      <p className="text-white/30 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - The Form */}
            <div className="lg:col-span-7 p-8 md:p-16 bg-white/[0.01]">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-white/30 tracking-widest ml-1">Nome Completo</label>
                        <div className="relative group">
                          <input 
                            required 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-lime-custom focus:ring-4 focus:ring-lime-custom/5 transition-all" 
                            placeholder="Seu nome"
                          />
                          <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lime-custom transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-white/30 tracking-widest ml-1">WhatsApp</label>
                        <div className="relative group">
                          <input 
                            required 
                            type="tel" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-lime-custom focus:ring-4 focus:ring-lime-custom/5 transition-all" 
                            placeholder="(00) 00000-0000"
                          />
                          <MessageSquare size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lime-custom transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-white/30 tracking-widest ml-1">Cidade / Estado</label>
                        <div className="relative group">
                          <input 
                            required 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-lime-custom focus:ring-4 focus:ring-lime-custom/5 transition-all" 
                            placeholder="Ex: São Paulo - SP"
                          />
                          <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lime-custom transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-white/30 tracking-widest ml-1">Capital Disponível</label>
                        <div className="relative group">
                          <select 
                            required 
                            className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-lime-custom focus:ring-4 focus:ring-lime-custom/5 appearance-none transition-all cursor-pointer"
                          >
                            <option value="">Selecione o valor</option>
                            <option value="ate-150">Até R$ 150 mil</option>
                            <option value="150-200">R$ 150k a R$ 200k</option>
                            <option value="mais-200">Acima de R$ 200k</option>
                          </select>
                          <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-lime-custom transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-lime-custom text-black font-black py-6 rounded-2xl shadow-[0_10px_30px_rgba(140,198,63,0.3)] hover:shadow-[0_20px_50px_rgba(140,198,63,0.4)] transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs"
                      >
                        RECEBER MATERIAL AGORA <ArrowRight size={18} />
                      </motion.button>
                      <p className="text-center text-[10px] text-white/20 mt-6 font-medium">
                        Seus dados estão seguros conosco de acordo com a LGPD.
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12 h-full flex flex-col justify-center"
                  >
                    <div className="w-24 h-24 bg-lime-custom rounded-full flex items-center justify-center text-black mx-auto mb-8 shadow-2xl shadow-lime-custom/20">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4">Candidatura Enviada!</h3>
                    <p className="text-white/40 text-lg mb-10 max-w-sm mx-auto">
                      Obrigado pelo interesse. Um consultor entrará em contato via WhatsApp em até 24h comerciais.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="text-lime-custom text-xs font-black uppercase tracking-widest border-b border-lime-custom pb-1 mx-auto hover:text-white hover:border-white transition-all"
                    >
                      Enviar novo formulário
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AccordionItem = ({ title, children }: { title: string, children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0 overflow-hidden">
      <button 
        className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-white group-hover:text-lime-custom transition-colors pr-8">{title}</span>
        <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-lime-custom text-black border-lime-custom rotate-180' : 'text-white/40'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-8 text-white/40 text-lg leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 px-6 bg-[#0d0d0d]">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white mb-4">Perguntas e respostas</h2>
        <p className="text-white/40">Tire suas principais dúvidas sobre a franquia Crocase</p>
      </div>
      <div className="space-y-2">
        <AccordionItem title="Qual o investimento inicial total para abrir uma Crocase?">
          O investimento varia de acordo com o modelo escolhido, partindo de R$ 38 mil para o modelo Eco Bark até R$ 138 mil para lojas em shoppings de grande fluxo.
        </AccordionItem>
        <AccordionItem title="Preciso ter experiência no ramo?">
          Não é necessário. Oferecemos todo o treinamento técnico e de gestão necessário para que você opere sua unidade com excelência desde o primeiro dia.
        </AccordionItem>
        <AccordionItem title="Como funciona a distribuição de estoque?">
          Trabalhamos com um sistema inteligente que analisa suas vendas em tempo real e sugere ou automatiza a reposição dos itens com maior saída na sua unidade.
        </AccordionItem>
        <AccordionItem title="Quanto tempo leva para inaugurar a loja?">
          Após a assinatura do contrato e escolha do ponto, o prazo médio para inauguração é de 60 a 90 dias, dependendo das obras necessárias.
        </AccordionItem>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-lime-custom rounded-xl flex items-center justify-center font-black text-black text-xs">CRO</div>
          <span className="text-white font-black text-2xl tracking-tighter">CROCASE</span>
        </div>
        <div className="text-white/20 text-xs font-black uppercase tracking-widest">
          © 2024 Crocase Franchising S/A.
        </div>
      </div>
      <div className="flex gap-10">
        {['Instagram', 'Facebook', 'LinkedIn'].map(link => (
          <a key={link} href="#" className="text-white/30 hover:text-lime-custom transition-colors text-xs font-black uppercase tracking-[0.2em]">{link}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative text-white selection:bg-lime-custom selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <MarketStats />
        <AuthoritySection />
        <WhyChoose />
        <HowItWorks />
        <ProfileCheck />
        <InvestmentModels />
        
        {/* Adicionado espaços para imagens como solicitado */}
        <section className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImagePlaceholder className="h-[400px]" label="BASTIDORES DA OPERAÇÃO" />
            <ImagePlaceholder className="h-[400px]" label="UNIDADE MODELO SHOPPING" />
          </div>
        </section>

        <LeadForm />
        <FAQ />
      </main>
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] -z-50"></div>
    </div>
  );
}
