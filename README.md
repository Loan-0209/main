# Main Repository

This repository has been configured with CI/CD using GitHub Actions.

## CI/CD Pipeline

The CI/CD pipeline is configured to run automatically on:
- Push to the main branch
- Pull requests to the main branch
- Manual trigger via GitHub Actions interface

### Pipeline Stages

1. **Build**
   - Checkout code
   - Set up Node.js environment
   - Install dependencies
   - Run linting (if configured)
   - Run tests (if configured)
   - Build the project (if configured)

2. **Deploy** (only runs on push to main)
   - Checkout code
   - Set up Node.js environment
   - Install dependencies
   - Build for production
   - Deploy to production environment

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/Loan-0209/main.git
   cd main
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the application
   ```bash
   npm start
   ```

## Development Workflow

Following the task-master workflow process:

1. Create a new branch for your feature or bugfix
2. Make your changes and commit them
3. Push your branch and create a pull request
4. The CI pipeline will automatically run tests on your PR
5. After review and approval, merge your PR to main
6. The CD pipeline will automatically deploy the changes

## Configuration

The CI/CD configuration is located in `.github/workflows/main.yml`