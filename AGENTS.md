 # 飨食堂 (codex-shop)
 
 在线中餐点餐应用。Vue 3 + Vite + Pinia。
 
 ## 技术栈 & 工具链
 
 | 项 | 值 |
 |----|-----|
 | 框架 | Vue 3 (Composition API, `<script setup>`) |
 | 构建 | Vite 5 + @vitejs/plugin-vue |
 | 状态管理 | Pinia 2 |
 | 样式 | Scoped CSS + 全局 CSS 变量 |
 | 语言 | JavaScript (ESM) |
 | 包管理器 | npm |
 
 ## 常用命令
 
 | 用途 | 命令 | 备注 |
 |------|------|------|
 | 启动开发服务器 | `npm run dev` | 端口 3000 |
 | 生产构建 | `npm run build` | 输出到 `dist/` |
 | 预览构建产物 | `npm run preview` | 需先执行 build |
 | 安装依赖 | `npm install` | 首次克隆后必须执行 |
 
 ## 修改代码后必须执行的验证步骤
 
 以下步骤按顺序执行，缺一不可：
 
 1. **构建检查** — `npm run build` 无报错（类型、语法、打包）
 2. **页面加载验证** — `npm run dev` 启动后打开 `http://localhost:3000`，确认白屏/控制台无报错
 3. **功能冒烟** — 依次操作：切换分类 → 加购菜品 → 修改数量 → 结算确认弹窗，所有交互正常
 4. **响应式检查** — 浏览器缩小至 768px 以下，确认 FAB 按钮出现、侧边购物车隐藏、Drawer 可正常弹出
 5. **回归检查** — 未修改的功能区域行为不变（如图片懒加载、Hero 动画、Toast 消失时机）
 
 ## 代码风格约定 & 提交前检查
 
 ### 组件规范
 - 全部使用 `<script setup>` + Composition API，禁止 Options API
 - 组件名：多词 PascalCase（`MenuItemCard.vue` 而非 `Menu-card.vue`）
 - Props 使用 `defineProps` 带类型声明（`{ type: Object, required: true }`）
 - Emits 使用 `defineEmits` 显式声明
 
 ### 样式规范
 - 组件样式使用 `<style scoped>`，禁止全局样式污染
 - 全局变量定义在 `src/styles/base.css` 的 `:root` 中，组件内不可硬编码色值/间距
 - CSS 类名使用 kebab-case
 
 ### 导入规范
 - 相对路径导入，不允许 alias 捷径（除非项目有明确配置）
 - 第三方库（vue, pinia）在前，本地模块在后，空行分隔
 
 ### 状态管理
 - 全局共享状态走 Pinia store（`src/stores/`）
 - 组件间临时 UI 状态（如 drawer 开关）走 composable 模块级 ref，不滥用 Pinia
 
 ### 提交前检查清单
 - [ ] `npm run build` 通过
 - [ ] 无 console.log、debugger、TODO 残留（允许 FIXME 但需附带 issue 引用）
 - [ ] 新增文件有明确职责，不与已有组件/函数重复
 - [ ] CSS 变量复用而非硬编码
 - [ ] 图片使用 `loading="lazy"`
 - [ ] 修改涉及交互时，移动端和桌面端都验证过
 
 ## 不可触碰的目录/文件/系统
 
 | 路径/资源 | 原因 | 操作限制 |
 |-----------|------|---------|
 | `node_modules/` | 包管理生成，仅通过 `npm install` 更新 | 禁止手动修改 |
 | `dist/` | 构建产物 | 禁止手动修改，由 `build` 命令生成 |
 | `.npm-cache/` | npm 缓存 | 禁止触碰 |
 | `dev.log`, `*.log` | 日志文件 | 禁止提交 |
 | `.env`, `.env.local`, `.env.*.local` | 可能含本地密钥 | 禁止提交（已 gitignore） |
 | GitHub 远程仓库配置 | 外部系统 | 不可修改远程分支保护规则 |
 | 任何 `.git/` 下手动编辑 | 仓库元数据 | 仅通过 git 命令操作 |
 
 ## 子目录例外规则
 
 当前项目为单页前端应用，无后端/脚本子目录，所有代码修改均遵循上述统一验证流程。
 
 若将来新增子目录：
 - `server/` 或 `backend/` — 后端修改需额外运行 `npm test`（如适用）并检查 API 契约
 - `scripts/` — 脚本修改需 `node scripts/xxx.js` 直接运行验证无报错
 - `e2e/` 或 `tests/` — 新增测试目录后，提交前需通过 `npm run test`（若配置）
 
 ## 关键约定
 
 - 入口链：`index.html` → `src/main.js` → `src/App.vue`
 - 未使用 vue-router，所有内容在同一页面呈现
 - 购物车抽屉开关状态在 `useCartUI.js`（模块级 ref）中共享，不在 Pinia 中
 - 菜品数据集中在 `src/data/menu.js`，增删菜品改此文件
