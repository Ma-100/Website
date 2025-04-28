document.addEventListener("mousemove", (e) => {
    const swirl = document.createElement("div");
    swirl.classList.add("swirl");
  
    // Random offset for more "Van Gogh" chaos
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
  
    swirl.style.left = `${e.clientX + offsetX}px`;
    swirl.style.top = `${e.clientY + offsetY}px`;
  
    // Random color swirl (blue or yellow tones like in Van Gogh's painting)
    const colors = ['#ffe066', '#f0c420', '#8ecae6', '#219ebc', '#ffffff'];
    swirl.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
  
    document.body.appendChild(swirl);
  
    setTimeout(() => {
      swirl.remove();
    }, 1200);
  });
  