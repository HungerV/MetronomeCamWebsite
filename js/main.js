// MetronomeCam Website JavaScript

/**
 * Site Configuration
 */
const siteConfig = {
  app: {
    name: 'MetronomeCam',
    nameCN: '节拍拍',
    tagline: '边练琴，边录像，节奏更精准',
    description: '专为音乐学习者设计的节拍器录像应用',
    isLaunched: false, // 是否已上架
    appStoreUrl: '', // App Store 链接（上架后填写）
  },
  contact: {
    email: 'support@sweetang.site',
  },
  company: {
    name: '上海随糖衍易网络科技有限公司',
    icp: '沪ICP备2025115361号',
  },
  colors: {
    primary: '#FFCD00',
    secondary: '#000000',
  },
};

/**
 * Initialize the website when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  initSmoothScroll();
  initImageErrorHandling();
  initPageLoadAnimation();
  
  console.log('MetronomeCam website initialized');
});

/**
 * Smooth Scroll for Anchor Links
 * Implements smooth scrolling behavior for internal navigation
 */
function initSmoothScroll() {
  // Get all anchor links that start with #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Use native smooth scroll if supported
        if ('scrollBehavior' in document.documentElement.style) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          // Fallback for older browsers
          targetElement.scrollIntoView();
        }
      }
    });
  });
}

/**
 * Image Error Handling
 * Provides fallback for images that fail to load
 */
function initImageErrorHandling() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('error', function() {
      // Create a placeholder SVG
      const placeholderSVG = createPlaceholderSVG(
        this.width || 300,
        this.height || 300
      );
      
      // Replace failed image with placeholder
      this.src = placeholderSVG;
      this.alt = '图片加载失败';
      
      // Add a class for styling
      this.classList.add('image-error');
      
      console.warn('Image failed to load:', this.dataset.src || this.src);
    });
  });
}

/**
 * Create Placeholder SVG
 * Generates an SVG placeholder for failed images
 */
function createPlaceholderSVG(width, height) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="14" 
        fill="#999" 
        text-anchor="middle" 
        dominant-baseline="middle">
        图片加载失败
      </text>
    </svg>
  `;
  
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/**
 * Page Load Animation
 * Adds fade-in animation to page elements on load
 */
function initPageLoadAnimation() {
  // Add fade-in class to body
  document.body.classList.add('loaded');
  
  // Animate sections on scroll (Intersection Observer)
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
  }
}

/**
 * Validate Email Address
 * Helper function to validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Update App Store Button
 * Updates the download button when app is launched
 */
function updateAppStoreButton() {
  if (siteConfig.app.isLaunched && siteConfig.app.appStoreUrl) {
    const buttons = document.querySelectorAll('.app-store-button, .cta-button');
    
    buttons.forEach(button => {
      button.disabled = false;
      button.textContent = '在 App Store 下载';
      
      // Add click handler to open App Store
      button.addEventListener('click', function() {
        window.open(siteConfig.app.appStoreUrl, '_blank');
      });
    });
    
    // Update status text
    const statusElements = document.querySelectorAll('.download-status');
    statusElements.forEach(element => {
      element.textContent = '立即下载 MetronomeCam';
    });
  }
}

/**
 * Console Welcome Message
 * Displays a welcome message in the browser console
 */
console.log('%c MetronomeCam 节拍拍 ', 'background: #FFCD00; color: #000000; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c 边练琴，边录像，节奏更精准 ', 'color: #666; font-size: 14px;');
console.log('%c ' + siteConfig.company.name, 'color: #999; font-size: 12px;');
console.log('%c 联系我们: ' + siteConfig.contact.email, 'color: #999; font-size: 12px;');
