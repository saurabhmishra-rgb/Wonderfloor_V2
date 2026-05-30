// src/components/SidebarNavTabs.jsx

const SidebarNavTabs = ({ categories, activeId, onChange, isDarkMode = false }) => (
  <div className={`flex overflow-x-auto shrink-0 border-b transition-colors
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
    ${isDarkMode ? 'border-[#334155] bg-[#1e293b]' : 'border-gray-200 bg-white'}`}
  >
    {categories.map((cat) => (
      <button
        key={cat.id}
        onClick={() => onChange(cat.id)}
        className={`shrink-0 px-4 py-2.5 text-xs font-bold tracking-wide
          border-b-2 transition-all whitespace-nowrap cursor-pointer
          ${activeId === cat.id
            ? isDarkMode
              ? 'border-teal-400 text-teal-400 bg-teal-400/10'   // ← active dark
              : 'border-[#0b5e5e] text-[#0b5e5e] bg-[#0b5e5e]/5' // ← active light
            : isDarkMode
              ? 'border-transparent text-gray-400 hover:text-white hover:border-gray-500 hover:bg-white/5' // ← inactive dark
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'               // ← inactive light
          }`}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default SidebarNavTabs;
