.DEFAULT_GOAL := help

start: ## Execute project on local environment
	@echo "🏃 Running project..."
	@npx expo start -w

lint: ## Run lint
	@echo "🧹 Running lint..."
	@npx eslint .

watch: ## Watch for changes and run lint
	@echo "👀 Watching for file changes..."
	find . -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -not -path "./node_modules/*" | entr make lint

upload: ## Upload project to expo
	@echo "🚀 Uploading project to expo..."
	@eas update --branch main