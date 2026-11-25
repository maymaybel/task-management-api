
# CI/CD Pipeline - Task Manager

## Pipeline Flow

1. Developer writes code.
2. Code is pushed to GitHub.
3. GitHub Actions starts the pipeline.
4. Dependencies are installed.
5. Automated tests are executed.
6. If tests pass, the build is successful.
7. The code is ready for deployment.

## Pipeline Diagram

Developer
    |
    v
GitHub Repository
    |
    v
GitHub Actions
    |
    v
Install Dependencies
    |
    v
Run Tests
    |
    v
Tests Passed?
   / \
 Yes  No
  |    |
  v    v
Build  Pipeline Failed
  |
  v
Deployment

## Test Failure Stage

If any test fails during the Run Tests stage,
the pipeline stops and the build is marked as failed.

The developer must fix the code and push
the changes again.

## Docker Integration

Docker packages the application and its dependencies
into a container.

The CI/CD pipeline can build and test the Docker image
after successful tests.

Docker provides a consistent environment for running
the application on different systems.
