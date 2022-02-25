const useDarkMode = () => {
   let clickedClass = 'clicked';
   const light = 'light';
   const dark = 'dark';
   const root = document.documentElement;
   let theme;

   if (localStorage) {
      theme = localStorage.getItem('theme');
   }

   if (theme === light || theme === dark) {
      root.classList.add(theme);
   } else {
      root.classList.add(light);
   }

   const switchTheme = event => {
      if (theme === dark) {
         root.classList.replace(dark, light);
         event.target.classList.remove(clickedClass);
         localStorage.setItem('theme', 'light');
         theme = light;
      } else {
         root.classList.replace(light, dark);
         event.target.classList.add(clickedClass);
         localStorage.setItem('theme', dark);
         theme = dark;
      }
   };

   return { theme, clickedClass, switchTheme };
};

export default useDarkMode;

/*const [theme, setTheme] = useState('light');
   const colorTheme = theme === 'light' ? 'dark' : 'light'; useEffect(() => {
      

      root.classList.remove(colorTheme);
      root.classList.add(theme);
   }, [theme]);

   return [colorTheme, setTheme]; */
