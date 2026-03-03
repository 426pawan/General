import React, { useState } from 'react';
import { 
  Building2, 
  Construction, 
  Hammer, 
  Banknote, 
  Package, 
  Calendar, 
  BarChart3, 
  Plus, 
  Search, 
  MoreVertical, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  ArrowRight,
  Filter,
  Sparkles,
  Loader2,
  X,
  Layers,
  MousePointer2,
  Hand,
  Type,
  Image as ImageIcon,
  Square,
  Circle,
  Share2,
  Play,
  Eye,
  Info,
  Monitor,
  Menu,
  ChevronRight,
  Layout
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [zoom, setZoom] = useState(100);

  // --- DESIGN ANNOTATIONS ---
  const annotations = [
    { id: 1, top: '25%', left: '20%', text: 'Project Cards: Grid layout optimized for desktop dashboards.' },
    { id: 2, top: '65%', left: '55%', text: 'Resource Table: Full-width data grid for tracking Module 4.5 entities.' },
    { id: 3, top: '15%', left: '80%', text: 'Global Search & Profile: Standard desktop utility placement.' }
  ];

  // --- MOCK DATA ---
  const projects = [
    { id: 'PROJ-101', title: 'Green Valley Heights', type: 'Construction', progress: 65, budget: '$12.5M', status: 'In Progress' },
    { id: 'PROJ-102', title: 'Old Town Renovation', type: 'Renovation', progress: 42, budget: '$2.8M', status: 'Delayed' },
    { id: 'PROJ-103', title: 'North Shelter Phase II', type: 'Construction', progress: 15, budget: '$5.2M', status: 'On Track' }
  ];

  const resources = [
    { id: 'RES-001', name: 'Structural Steel', qty: '450 Tons', status: 'In Stock', project: 'PROJ-101' },
    { id: 'RES-002', name: 'Emergency Fund', qty: '$1.2M', status: 'Allocated', project: 'PROJ-103' },
    { id: 'RES-003', name: 'Cement Bags', qty: '200 Units', status: 'Low Stock', project: 'PROJ-101' }
  ];

  return (
    <div className="flex h-screen bg-[#1E1E1E] font-sans text-white overflow-hidden select-none">
      {/* --- FIGMA LEFT SIDEBAR --- */}
      <aside className="w-64 border-r border-[#333] flex flex-col shrink-0 text-xs">
        <div className="p-4 border-b border-[#333] flex justify-between items-center bg-[#2C2C2C]">
          <span className="font-bold uppercase tracking-tighter text-gray-400">Layers</span>
          <Layers size={14} />
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <div className="p-2 text-blue-400 flex items-center gap-2 bg-blue-400/10 rounded font-bold">
            <Monitor size={12} /> Desktop - 1440
          </div>
          <div className="pl-6 p-1.5 text-gray-400 flex items-center gap-2">
             <Layout size={10} /> Page_Header
          </div>
          <div className="pl-6 p-1.5 text-gray-400 flex items-center gap-2">
             <Square size={10} /> Metrics_Row
          </div>
          <div className="pl-6 p-1.5 text-blue-400 flex items-center gap-2 bg-blue-400/5 rounded">
             <Square size={10} /> Project_Grid_Section
          </div>
          {projects.map(p => (
            <div key={p.id} className="pl-10 p-1 text-gray-500 flex items-center gap-2 truncate">
               <Square size={10} /> Card_{p.id}
            </div>
          ))}
          <div className="pl-6 p-1.5 text-gray-400 flex items-center gap-2">
             <Square size={10} /> Resource_Data_Table
          </div>
        </div>
      </aside>

      {/* --- MAIN DESIGN AREA --- */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#121212] relative overflow-hidden">
        
        {/* Figma Toolbar */}
        <header className="h-12 bg-[#2C2C2C] border-b border-[#333] flex items-center justify-between px-4 shrink-0 z-50">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-1.5 rounded text-[10px] font-bold">
              <MousePointer2 size={14} />
            </div>
            <Hand size={14} className="text-gray-400" />
            <Square size={14} className="text-gray-400" />
            <Circle size={14} className="text-gray-400" />
            <Type size={14} className="text-gray-400" />
            <ImageIcon size={14} className="text-gray-400" />
          </div>
          
          <div className="text-[11px] font-medium text-gray-400">
            HousingAid / <span className="text-white">Desktop Wireframe (Module 4.5)</span>
          </div>

          <div className="flex items-center gap-3">
             <button className="bg-[#333] px-3 py-1 rounded text-[11px] font-bold border border-[#444] hover:bg-[#444]">Share</button>
             <button className="bg-blue-600 px-3 py-1 rounded text-[11px] font-bold">Play</button>
             <div className="text-[10px] text-gray-400 ml-2">{zoom}%</div>
          </div>
        </header>

        {/* Canvas Area */}
        <div className="flex-1 overflow-auto relative p-20 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] flex justify-center items-start">
          
          {/* THE DESKTOP ARTBOARD */}
          <div className="w-[1200px] min-h-[900px] bg-white text-slate-900 shadow-2xl rounded-sm border border-slate-200 relative overflow-hidden flex flex-col">
            
            {/* Annotation Stickers */}
            {annotations.map(note => (
              <div key={note.id} className="absolute z-50 pointer-events-none" style={{ top: note.top, left: note.left }}>
                <div className="bg-yellow-100 border border-yellow-300 p-3 text-[10px] w-48 shadow-xl rounded-bl-none text-slate-800 font-bold border-l-4 border-l-yellow-500">
                   Design Note #{note.id}
                  <div className="mt-1 font-medium leading-relaxed opacity-80">{note.text}</div>
                </div>
              </div>
            ))}

            {/* Desktop App Header */}
            <header className="px-10 h-20 flex justify-between items-center bg-white border-b border-slate-100 shrink-0">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                    <Building2 size={24} />
                 </div>
                 <div>
                    <h1 className="font-black text-lg uppercase tracking-widest text-slate-900 leading-none">HousingAid</h1>
                    <span className="text-[9px] font-bold text-blue-600 uppercase tracking-tighter">Program Management</span>
                 </div>
               </div>
               
               <nav className="flex items-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                 <span className="text-slate-900 border-b-2 border-slate-900 pb-7 mt-1">Portfolio</span>
                 <span className="pb-7 mt-1 hover:text-slate-600 cursor-pointer">Resources</span>
                 <span className="pb-7 mt-1 hover:text-slate-600 cursor-pointer">Finance</span>
                 <span className="pb-7 mt-1 hover:text-slate-600 cursor-pointer">Settings</span>
               </nav>

               <div className="flex items-center gap-4">
                 <div className="w-40 h-9 bg-slate-50 border border-slate-200 rounded-lg flex items-center px-3 gap-2">
                    <Search size={14} className="text-slate-300" />
                    <div className="w-full h-2 bg-slate-200 rounded-full"></div>
                 </div>
                 <div className="w-9 h-9 bg-slate-100 rounded-full border border-slate-200"></div>
               </div>
            </header>

            {/* Main Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-10 space-y-12">
              
              {/* Stats Bar */}
              <div className="grid grid-cols-4 gap-6">
                {[
                  { label: 'Active Projects', val: '12', icon: Construction, color: 'text-blue-600' },
                  { label: 'Total Budget', val: '$45.2M', icon: Banknote, color: 'text-green-600' },
                  { label: 'Resource Stock', val: '94%', icon: Package, color: 'text-amber-600' },
                  { label: 'Avg Efficiency', val: '82%', icon: TrendingUp, color: 'text-purple-600' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <stat.icon size={20} className={stat.color} />
                      <div className="w-2 h-2 rounded-full bg-slate-100"></div>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-2xl font-black text-slate-900 mt-1">{stat.val}</p>
                  </div>
                ))}
              </div>

              {/* HousingProject Grid Section */}
              <div className="space-y-6">
                 <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-black text-slate-800 tracking-tight">Project Portfolio</h2>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Management of Construction & Renovation (Mod 4.5.1)</p>
                    </div>
                    <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2">
                       <Plus size={16} /> New Project
                    </button>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-6">
                   {projects.map((p) => (
                     <div key={p.id} className="p-6 border border-slate-200 rounded-3xl bg-white shadow-sm hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer group">
                        <div className="flex justify-between items-start mb-6">
                           <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                             {p.type === 'Construction' ? <Construction size={22} /> : <Hammer size={22} />}
                           </div>
                           <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${p.status === 'Delayed' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                             {p.status}
                           </div>
                        </div>
                        <h4 className="font-black text-base text-slate-800 truncate">{p.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="text-[10px] font-bold text-slate-400 uppercase">{p.id}</span>
                           <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                           <span className="text-[10px] font-bold text-slate-400 uppercase">{p.budget}</span>
                        </div>
                        
                        <div className="mt-8 space-y-2">
                           <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                             <span>Completion</span>
                             <span className="text-slate-900">{p.progress}%</span>
                           </div>
                           <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                             <div className="bg-slate-900 h-full group-hover:bg-blue-600 transition-colors" style={{width: `${p.progress}%`}}></div>
                           </div>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Resource Table Section */}
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                 <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div>
                       <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Resource Tracking (Mod 4.5.2)</h3>
                       <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Materials & Financial Asset Utilization</p>
                    </div>
                    <div className="flex gap-3">
                       <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 flex items-center gap-2">
                          <Filter size={14} /> Filter
                       </button>
                       <button className="px-4 py-2 bg-slate-100 text-slate-900 rounded-xl text-xs font-bold border border-slate-200">
                          Export Data
                       </button>
                    </div>
                 </div>
                 <div className="w-full">
                    <table className="w-full text-left">
                       <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <tr>
                             <th className="px-8 py-4">ID</th>
                             <th className="px-8 py-4">Resource Name</th>
                             <th className="px-8 py-4">Type</th>
                             <th className="px-8 py-4">Quantity</th>
                             <th className="px-8 py-4">Project Association</th>
                             <th className="px-8 py-4">Status</th>
                             <th className="px-8 py-4"></th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
                          {resources.map((r) => (
                            <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                               <td className="px-8 py-5 font-mono text-blue-600">{r.id}</td>
                               <td className="px-8 py-5 font-black text-slate-900">{r.name}</td>
                               <td className="px-8 py-5">
                                 <div className="flex items-center gap-2">
                                    {r.name.includes('Fund') ? <Banknote size={14} className="text-slate-400" /> : <Package size={14} className="text-slate-400" />}
                                    <span className="uppercase text-[10px] font-bold tracking-tighter">Entity_Type</span>
                                 </div>
                               </td>
                               <td className="px-8 py-5 font-bold">{r.qty}</td>
                               <td className="px-8 py-5 text-slate-400 font-bold uppercase">{r.project}</td>
                               <td className="px-8 py-5">
                                 <div className={`w-16 h-4 bg-slate-100 rounded-full flex items-center justify-center text-[8px] font-black uppercase text-slate-400`}>
                                   {r.status}
                                 </div>
                               </td>
                               <td className="px-8 py-5 text-right">
                                  <MoreVertical size={16} className="text-slate-300 cursor-pointer" />
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              {/* AI Strategic Section */}
              <div className="bg-slate-900 rounded-[40px] p-12 text-white flex items-center justify-between relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                   <Sparkles size={160} />
                 </div>
                 <div className="max-w-xl relative z-10">
                    <div className="flex items-center gap-3 text-blue-400 mb-6">
                       <Sparkles size={24} />
                       <span className="text-sm font-black uppercase tracking-widest">Predictive Analytics</span>
                    </div>
                    <h3 className="text-4xl font-black tracking-tighter mb-4">Strategic Resource Assessment</h3>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed">
                       Our AI engine analyzes project outcomes and utilization trends to optimize the next phase of construction. Get predictive insights on budget drift and material shortages.
                    </p>
                 </div>
                 <button className="relative z-10 px-10 py-5 bg-blue-600 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-blue-500 shadow-2xl shadow-blue-900/40 transition-all hover:-translate-y-1">
                    Generate AI Report
                 </button>
              </div>
            </div>

            {/* Simulated Desktop Status Bar / Footer */}
            <footer className="h-10 px-10 flex justify-between items-center bg-slate-50 border-t border-slate-100 shrink-0 text-[10px] font-bold text-slate-400 uppercase">
               <span>HousingAid v2.4.0-beta</span>
               <div className="flex gap-6">
                  <span>System: Operational</span>
                  <span>Region: Urban_Shelter_South</span>
                  <div className="flex gap-1 items-center text-blue-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                    <span>Live Updates</span>
                  </div>
               </div>
            </footer>
          </div>
        </div>
      </div>

      {/* --- FIGMA RIGHT SIDEBAR --- */}
      <aside className="w-64 border-l border-[#333] flex flex-col shrink-0 text-xs">
        <div className="flex border-b border-[#333] bg-[#2C2C2C]">
          <button className="flex-1 p-3 font-bold border-b-2 border-blue-500">Design</button>
          <button className="flex-1 p-3 font-bold text-gray-500">Inspect</button>
        </div>
        
        <div className="p-4 space-y-8">
          <div>
            <span className="text-gray-500 font-bold block mb-4 uppercase tracking-tighter text-[10px]">Artboard Info</span>
            <div className="grid grid-cols-2 gap-3">
               <div className="bg-[#2C2C2C] p-2.5 rounded-lg border border-[#444] text-[10px] text-gray-400">
                  <span className="block mb-1 text-gray-600">W</span> 1440
               </div>
               <div className="bg-[#2C2C2C] p-2.5 rounded-lg border border-[#444] text-[10px] text-gray-400">
                  <span className="block mb-1 text-gray-600">H</span> 1024
               </div>
            </div>
          </div>

          <div>
            <span className="text-gray-500 font-bold block mb-4 uppercase tracking-tighter text-[10px]">Design Tokens</span>
            <div className="space-y-4">
               <div className="flex items-center justify-between">
                  <span className="text-gray-400">Primary</span>
                  <div className="flex items-center gap-2">#0F172A <div className="w-3 h-3 bg-slate-900 rounded-sm"></div></div>
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-gray-400">Accent</span>
                  <div className="flex items-center gap-2">#2563EB <div className="w-3 h-3 bg-blue-600 rounded-sm"></div></div>
               </div>
            </div>
          </div>

          <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
             <div className="flex items-center gap-2 text-blue-400 mb-2 font-bold uppercase text-[9px]">
               <Play size={12} /> Prototype Logic
             </div>
             <p className="text-[10px] leading-relaxed text-blue-300/60">
               Project cards utilize hover-states to expose detailed resource breakdown. Table headers support multi-column sorting for financial audits.
             </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#333]">
             <span className="text-gray-500 font-bold block uppercase tracking-tighter text-[10px]">Export</span>
             <button className="w-full py-2.5 bg-[#333] border border-[#444] rounded-lg text-white font-bold text-[10px] uppercase">Export Artboard</button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default App;