.PHONY: all
go:
	swagger-cli bundle api/aura.yaml --outfile bundle.yaml --type yaml && \
		npx @openapitools/openapi-generator-cli generate -g go -o go -i bundle.yaml -p packageName=auraframes \
		--git-user-id mvarrieur --git-repo-id=auraframes-api/go

typescript:
	swagger-cli bundle api/aura.yaml --outfile bundle.yaml --type yaml && \
		npx @openapitools/openapi-generator-cli generate -g typescript -o typescript -i bundle.yaml -p npmName=@mvarrieur/auraframes-api \
		--git-user-id mvarrieur --git-repo-id=auraframes-api/typescript

.PHONY: clean
clean:
	rm -fR typescript && rm -fR go
