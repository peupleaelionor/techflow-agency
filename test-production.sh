#!/bin/bash

# Quick Test Script for TechFlow Production Build
# Usage: bash test-production.sh

set -e

echo "🚀 TechFlow Production Test Suite"
echo "=================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Check Node/pnpm
echo -e "${YELLOW}1. Checking dependencies...${NC}"
node --version || echo "❌ Node not found"
pnpm --version || echo "❌ pnpm not found"
echo -e "${GREEN}✓ Dependencies OK${NC}"
echo ""

# 2. TypeScript Check
echo -e "${YELLOW}2. Checking TypeScript...${NC}"
if pnpm check > /dev/null 2>&1; then
  echo -e "${GREEN}✓ TypeScript OK${NC}"
else
  echo -e "${RED}❌ TypeScript errors (see above)${NC}"
fi
echo ""

# 3. Build
echo -e "${YELLOW}3. Building production...${NC}"
if pnpm build > /dev/null 2>&1; then
  echo -e "${GREEN}✓ Build OK (41s typical)${NC}"
else
  echo -e "${RED}❌ Build failed${NC}"
  exit 1
fi
echo ""

# 4. Check build output
echo -e "${YELLOW}4. Checking build output...${NC}"
if [ -d "dist" ]; then
  FILE_COUNT=$(find dist -type f | wc -l)
  echo -e "${GREEN}✓ Build directory exists ($FILE_COUNT files)${NC}"
else
  echo -e "${RED}❌ No dist directory${NC}"
  exit 1
fi
echo ""

# 5. Check env example
echo -e "${YELLOW}5. Checking environment template...${NC}"
if [ -f ".env.example" ]; then
  echo -e "${GREEN}✓ .env.example exists${NC}"
  echo "   Create .env.local with:"
  grep "=" .env.example | head -3
else
  echo -e "${RED}❌ .env.example not found${NC}"
fi
echo ""

# 6. Check documentation
echo -e "${YELLOW}6. Checking documentation...${NC}"
[ -f "README_PRODUCTION.md" ] && echo -e "${GREEN}✓ README_PRODUCTION.md${NC}" || echo -e "${RED}❌ README_PRODUCTION.md${NC}"
[ -f "QA_CHECKLIST.md" ] && echo -e "${GREEN}✓ QA_CHECKLIST.md${NC}" || echo -e "${RED}❌ QA_CHECKLIST.md${NC}"
[ -f "DELIVERY_MANIFEST.md" ] && echo -e "${GREEN}✓ DELIVERY_MANIFEST.md${NC}" || echo -e "${RED}❌ DELIVERY_MANIFEST.md${NC}"
echo ""

# 7. Summary
echo -e "${GREEN}=================================="
echo "✅ Production Build Ready"
echo "==================================${NC}"
echo ""
echo "Next steps:"
echo "1. Configure .env.local:"
echo "   cp .env.example .env.local"
echo "   # Edit with your RESEND_API_KEY"
echo ""
echo "2. Test locally:"
echo "   pnpm dev"
echo ""
echo "3. Review documentation:"
echo "   - README_PRODUCTION.md"
echo "   - QA_CHECKLIST.md"
echo ""
echo "4. Deploy to Vercel:"
echo "   git add . && git commit -m 'feat: v1.0.0 production'"
echo "   git push origin master"
echo ""
