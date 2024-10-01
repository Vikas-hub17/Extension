// contentScript.tsx

const runContentScript = () => {
  console.log('Content script running...');

  // Example of using MutationObserver
  const targetNode = document.querySelector('.some-element');
  if (targetNode) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log('Mutation detected:', mutation);
      });
    });

    observer.observe(targetNode, { childList: true, subtree: true });
  }
};

runContentScript();
