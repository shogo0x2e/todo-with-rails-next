require "graphql/rake_task"
GraphQL::RakeTask.new(schema_name: "TodoWithRailsNextApiSchema", directory: "../graphql")
