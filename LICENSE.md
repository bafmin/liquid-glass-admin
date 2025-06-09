
To add this:

```bash
cat << 'EOF' > README.md
# Liquid Glass Admin Template

A React-based admin dashboard scaffold showcasing Apple’s Liquid Glass (glassmorphism) UI components:
- ✅ ThemeContext for light/dark mode  
- ✅ GlassPanel, GlassCard, GlassButton, GlassInput components  
- 📂 Full file structure ready for development

## Getting Started

\`\`\`bash
git clone https://github.com/bafmin/liquid-glass-admin.git
cd liquid-glass-admin
npm install
npm start
\`\`\`

## Folder Structure

\`\`\`text
public/
src/
├─ components/
├─ common/
├─ ui/
│  ├─ GlassPanel/
│  ├─ GlassCard/
│  ├─ GlassButton/
│  └─ GlassInput/
├─ contexts/
│  ├─ SidebarContext/
│  └─ ThemeContext/
├─ hooks/
├─ pages/
└─ index.tsx
.gitignore
package.json
tsconfig.json
\`\`\`

## License

MIT
EOF

git add README.md
git commit -m "Add project README"
git push
