// AI Tools data
const aiTools = [
    {
        id: 1,
        name: "ChatGPT",
        description: "OpenAI开发的大型语言模型，能够进行自然对话、回答问题、协助写作、编程等多种任务。",
        category: "text",
        tags: ["对话", "文本生成", "编程", "写作"],
        rating: 4.9,
        lastUpdated: "2024-12-15",
        url: "https://chat.openai.com",
        logo: "imgs/ai_tool_icon_logo_set_gradient_sparkle.jpg"
    },
    {
        id: 2,
        name: "Midjourney",
        description: "基于AI的图像生成工具，能够根据文字描述生成高质量的艺术作品和图像。",
        category: "image",
        tags: ["图像生成", "艺术", "设计", "创作"],
        rating: 4.8,
        lastUpdated: "2024-12-10",
        url: "https://midjourney.com",
        logo: "imgs/artificial-intelligence-technology-tool-icon-set.jpg"
    },
    {
        id: 3,
        name: "GitHub Copilot",
        description: "AI编程助手，能够根据代码上下文和注释自动生成代码，提高开发效率。",
        category: "code",
        tags: ["编程", "代码生成", "IDE插件", "开发工具"],
        rating: 4.7,
        lastUpdated: "2024-12-12",
        url: "https://github.com/features/copilot",
        logo: "imgs/ai_technology_tool_icon_set_navigation_website.jpg"
    },
    {
        id: 4,
        name: "Stable Diffusion",
        description: "开源的文本到图像生成模型，可以本地部署，完全免费使用。",
        category: "image",
        tags: ["开源", "文本生成图像", "本地部署", "免费"],
        rating: 4.6,
        lastUpdated: "2024-12-08",
        url: "https://stability.ai",
        logo: "imgs/ai_tool_icons_vector_set_yellow_black_clean.jpg"
    },
    {
        id: 5,
        name: "Runway ML",
        description: "AI视频编辑和生成平台，提供从文本到视频、AI动画等多种创意工具。",
        category: "audio",
        tags: ["视频生成", "视频编辑", "创意工具", "AI动画"],
        rating: 4.5,
        lastUpdated: "2024-12-14",
        url: "https://runwayml.com",
        logo: "imgs/ai_technology_tool_icon_set_line_art.jpg"
    },
    {
        id: 6,
        name: "TensorFlow",
        description: "Google开发的开源机器学习框架，用于构建和部署机器学习模型。",
        category: "ml",
        tags: ["机器学习", "深度学习", "开源框架", "Python"],
        rating: 4.8,
        lastUpdated: "2024-12-11",
        url: "https://tensorflow.org",
        logo: "imgs/ai_tool_icon_logo_set_gradient_sparkle.jpg"
    },
    {
        id: 7,
        name: "Jupyter",
        description: "开源的数据科学和机器学习平台，支持多种编程语言的交互式开发。",
        category: "data",
        tags: ["数据科学", "笔记本", "Python", "R", "可视化"],
        rating: 4.7,
        lastUpdated: "2024-12-09",
        url: "https://jupyter.org",
        logo: "imgs/artificial-intelligence-technology-tool-icon-set.jpg"
    },
    {
        id: 8,
        name: "Claude",
        description: "Anthropic开发的AI助手，擅长长文本分析、写作、编程和对话。",
        category: "text",
        tags: ["对话", "文本分析", "写作", "长文本处理"],
        rating: 4.8,
        lastUpdated: "2024-12-13",
        url: "https://claude.ai",
        logo: "imgs/ai_technology_tool_icon_set_navigation_website.jpg"
    },
    {
        id: 9,
        name: "DALL-E 3",
        description: "OpenAI最新的图像生成模型，能够根据文字描述生成高质量图像。",
        category: "image",
        tags: ["图像生成", "文本转图像", "OpenAI", "高质量"],
        rating: 4.9,
        lastUpdated: "2024-12-16",
        url: "https://openai.com/dall-e-3",
        logo: "imgs/ai_tool_icons_vector_set_yellow_black_clean.jpg"
    },
    {
        id: 10,
        name: "Cursor",
        description: "AI驱动的代码编辑器，集成了GPT技术来帮助代码编写和重构。",
        category: "code",
        tags: ["代码编辑器", "AI编程", "GPT", "重构"],
        rating: 4.6,
        lastUpdated: "2024-12-07",
        url: "https://cursor.sh",
        logo: "imgs/ai_technology_tool_icon_set_line_art.jpg"
    },
    {
        id: 11,
        name: "Whisper",
        description: "OpenAI的语音识别模型，支持多种语言的音频转文本功能。",
        category: "audio",
        tags: ["语音识别", "语音转文本", "多语言", "开源"],
        rating: 4.7,
        lastUpdated: "2024-12-12",
        url: "https://openai.com/research/whisper",
        logo: "imgs/ai_tool_icon_logo_set_gradient_sparkle.jpg"
    },
    {
        id: 12,
        name: "LangChain",
        description: "用于构建LLM应用程序的框架，支持链式调用和智能体开发。",
        category: "ml",
        tags: ["LLM框架", "智能体", "链式调用", "Python"],
        rating: 4.5,
        lastUpdated: "2024-12-10",
        url: "https://langchain.com",
        logo: "imgs/artificial-intelligence-technology-tool-icon-set.jpg"
    },
    {
        id: 13,
        name: "Tableau",
        description: "专业的数据可视化工具，结合AI功能进行智能分析和图表生成。",
        category: "data",
        tags: ["数据可视化", "商业智能", "图表", "分析"],
        rating: 4.4,
        lastUpdated: "2024-12-11",
        url: "https://tableau.com",
        logo: "imgs/ai_technology_tool_icon_set_navigation_website.jpg"
    },
    {
        id: 14,
        name: "Perplexity",
        description: "AI驱动的搜索引擎，能够理解问题并提供准确的搜索结果和引用。",
        category: "research",
        tags: ["搜索引擎", "AI助手", "引用", "信息检索"],
        rating: 4.6,
        lastUpdated: "2024-12-15",
        url: "https://perplexity.ai",
        logo: "imgs/ai_tool_icons_vector_set_yellow_black_clean.jpg"
    },
    {
        id: 15,
        name: "ElevenLabs",
        description: "先进的AI语音合成平台，能够生成自然流畅的语音内容。",
        category: "audio",
        tags: ["语音合成", "文本转语音", "语音克隆", "配音"],
        rating: 4.7,
        lastUpdated: "2024-12-14",
        url: "https://elevenlabs.io",
        logo: "imgs/ai_technology_tool_icon_set_line_art.jpg"
    },
    {
        id: 16,
        name: "Hugging Face",
        description: "开源的机器学习模型平台，提供大量的预训练模型和工具。",
        category: "ml",
        tags: ["开源模型", "NLP", "Transformer", "社区"],
        rating: 4.8,
        lastUpdated: "2024-12-13",
        url: "https://huggingface.co",
        logo: "imgs/ai_tool_icon_logo_set_gradient_sparkle.jpg"
    }
];

// Global variables
let filteredTools = [...aiTools];
let currentCategory = 'all';

// DOM elements
const searchInput = document.getElementById('search-input');
const toolsGrid = document.getElementById('tools-grid');
const resultsCount = document.getElementById('results-count');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobile-overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Load and display tools
    renderTools(aiTools);
    
    // Setup event listeners
    setupEventListeners();
    
    // Update results count
    updateResultsCount();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when overlay is clicked
    mobileOverlay.addEventListener('click', closeMobileMenu);
    
    // Category navigation
    navLinks.forEach(link => {
        link.addEventListener('click', handleCategoryChange);
    });
    
    // Close mobile menu when window is resized to desktop
    window.addEventListener('resize', handleResize);
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredTools = currentCategory === 'all' 
            ? [...aiTools] 
            : aiTools.filter(tool => tool.category === currentCategory);
    } else {
        filteredTools = aiTools.filter(tool => {
            const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
            const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                                tool.description.toLowerCase().includes(searchTerm) ||
                                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            return matchesCategory && matchesSearch;
        });
    }
    
    renderTools(filteredTools);
    updateResultsCount();
}

// Handle category change
function handleCategoryChange(e) {
    e.preventDefault();
    
    const category = e.currentTarget.dataset.category;
    currentCategory = category;
    
    // Update active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    // Filter tools based on category and search
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (category === 'all') {
        filteredTools = searchTerm === '' 
            ? [...aiTools] 
            : aiTools.filter(tool => {
                const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                                    tool.description.toLowerCase().includes(searchTerm) ||
                                    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
                return matchesSearch;
            });
    } else {
        filteredTools = aiTools.filter(tool => {
            const matchesCategory = tool.category === category;
            const matchesSearch = searchTerm === '' ||
                                tool.name.toLowerCase().includes(searchTerm) ||
                                tool.description.toLowerCase().includes(searchTerm) ||
                                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            return matchesCategory && matchesSearch;
        });
    }
    
    renderTools(filteredTools);
    updateResultsCount();
    
    // Close mobile menu if open
    closeMobileMenu();
}

// Toggle mobile menu
function toggleMobileMenu() {
    sidebar.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu
function closeMobileMenu() {
    sidebar.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Handle window resize
function handleResize() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}

// Render tools grid
function renderTools(tools) {
    if (tools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="no-results">
                <p>未找到匹配的工具，请尝试其他搜索词或分类。</p>
            </div>
        `;
        return;
    }
    
    toolsGrid.innerHTML = tools.map(tool => createToolCard(tool)).join('');
    
    // Re-initialize Lucide icons for the new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Create individual tool card
function createToolCard(tool) {
    const stars = '★'.repeat(Math.floor(tool.rating)) + '☆'.repeat(5 - Math.floor(tool.rating));
    
    return `
        <div class="tool-card" data-category="${tool.category}">
            <div class="tool-card-header">
                <img src="${tool.logo}" alt="${tool.name}" class="tool-logo" 
                     onerror="this.src='imgs/ai_technology_tool_icon_set_line_art.jpg'">
                <h3 class="tool-title">${tool.name}</h3>
                <a href="${tool.url}" target="_blank" class="visit-btn">访问</a>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tags">
                ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="tool-footer">
                <div class="rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-text">${tool.rating}</span>
                </div>
                <span class="last-updated">更新: ${tool.lastUpdated}</span>
            </div>
        </div>
    `;
}

// Update results count
function updateResultsCount() {
    const count = filteredTools.length;
    const categoryText = currentCategory === 'all' ? '所有分类' : getCategoryDisplayName(currentCategory);
    
    if (searchInput.value.trim() === '') {
        resultsCount.textContent = `显示 ${categoryText} 的 ${count} 个工具`;
    } else {
        resultsCount.textContent = `找到 ${count} 个匹配 "${searchInput.value.trim()}" 的工具`;
    }
}

// Get display name for category
function getCategoryDisplayName(category) {
    const categoryMap = {
        'all': '所有分类',
        'text': '文本生成',
        'image': '图像处理',
        'audio': '音频视频',
        'code': '代码工具',
        'data': '数据分析',
        'ml': '机器学习',
        'research': '研究工具'
    };
    return categoryMap[category] || category;
}

// Add some CSS for no results state
const style = document.createElement('style');
style.textContent = `
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: var(--space-xl);
        color: var(--neutral-400);
        font-size: var(--font-size-body);
    }
`;
document.head.appendChild(style);