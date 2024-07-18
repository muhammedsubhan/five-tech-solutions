export const smoothScroll = (targetId) => {
  const target = document.getElementById(targetId);
  if (target) {
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration in milliseconds
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Easing function
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  }
};
