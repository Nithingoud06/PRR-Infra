// Simple performance test script
// Run this in browser console to test performance improvements

console.log('🚀 Performance Test Starting...');

// Test 1: Measure page load time
const startTime = performance.now();
window.addEventListener('load', () => {
  const loadTime = performance.now() - startTime;
  console.log(`📊 Page Load Time: ${loadTime.toFixed(2)}ms`);
  
  // Test 2: Count DOM nodes (fewer is better)
  const nodeCount = document.querySelectorAll('*').length;
  console.log(`📊 DOM Nodes: ${nodeCount}`);
  
  // Test 3: Check for lazy loading
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  console.log(`📊 Lazy Loaded Images: ${lazyImages.length}`);
  
  // Test 4: Check for memoized components
  const memoComponents = document.querySelectorAll('[data-memo]');
  console.log(`📊 Memoized Components: ${memoComponents.length}`);
  
  // Test 5: Measure image loading
  const images = document.querySelectorAll('img');
  let loadedImages = 0;
  images.forEach(img => {
    if (img.complete && img.naturalHeight !== 0) {
      loadedImages++;
    }
  });
  console.log(`📊 Images Loaded: ${loadedImages}/${images.length}`);
  
  console.log('✅ Performance Test Complete!');
  console.log('💡 Expected improvements:');
  console.log('   - Faster page load times');
  console.log('   - Reduced DOM complexity');
  console.log('   - Better image loading performance');
  console.log('   - Smoother animations');
});
