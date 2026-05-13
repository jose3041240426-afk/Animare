"use client";

import { useEffect } from "react";

export default function CodeProtection() {
  useEffect(() => {
    // 1. Desactivar el menú contextual (Click derecho)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Desactivar atajos de teclado comunes para inspeccionar
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl + Shift + I (Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
      }
      // Ctrl + Shift + J (Consola)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
      }
      // Ctrl + U (Ver código fuente)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
      // Ctrl + Shift + C (Inspección de elementos)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
      }
    };

    // 3. Detectar si la consola está abierta y mostrar un mensaje o limpiar
    // Nota: Esto es un truco común, pero no es infalible
    const checkDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        // Podríamos hacer algo aquí si detectamos que se abrió
        console.clear();
        console.log(
          "%c¡Detente!",
          "color: red; font-size: 50px; font-weight: bold; -webkit-text-stroke: 1px black;"
        );
        console.log(
          "%cEsta zona es para desarrolladores. Si alguien te dijo que copiaras algo aquí, es una estafa.",
          "font-size: 20px;"
        );
      }
    };

    // 4. Bloqueo por "debugger" (Opcional, muy agresivo)
    // Esto pausa la ejecución si las DevTools están abiertas
    let interval: NodeJS.Timeout;
    if (process.env.NODE_ENV !== "development") {
      interval = setInterval(() => {
        (function() {
          (function a() {
            try {
              (function b(i) {
                if (("" + i / i).length !== 1 || i % 20 === 0) {
                  (function() {}).constructor("debugger")();
                } else {
                  debugger;
                }
                b(++i);
              })(0);
            } catch (e) {}
          })();
        })();
      }, 1000);
    }

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", checkDevTools);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", checkDevTools);
      if (interval) clearInterval(interval);
    };
  }, []);

  return null;
}
