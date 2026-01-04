/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",   // tous les fichiers HTML
    "./**/*.js"   // tous les JS (pour les classes ajoutées via JS)
  ],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
        '85vh': '85vh',
        '420px': '420px'
      },
      minWidth: {
        '280px': '280px'
      },
      colors: {
        'brand-dark': 'var(--brand-dark)',
        'accent-pink': 'var(--accent-pink)',
        'accent-blue': 'var(--accent-blue)',
        'bg-light': 'var(--bg-light)'
      },
      backgroundImage: {
        'hero-img': "url('https://images.unsplash.com/photo-1625209913776-15e12b3a5df1?auto=format&fit=crop&w=1600&q=80')"
      }
    }
  },
  safelist: [
    'h-[80vh]',
    'h-[85vh]',
    'h-[420px]',
    'min-w-[280px]',
    'bg-[var(--accent-pink)]',
    'bg-[var(--accent-blue)]',
    'bg-[var(--bg-light)]',
    'bg-[var(--brand-dark)]',
    'bg-[url(\'https://images.unsplash.com/photo-1625209913776-15e12b3a5df1?auto=format&fit=crop&w=1600&q=80\')]',
    'text-[var(--accent-pink)]',
    'text-[var(--brand-dark)]',
    'group-hover:scale-105'
  ],
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
