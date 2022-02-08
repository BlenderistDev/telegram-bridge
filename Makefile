gen-proto:
	@protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=./src/grpc/proto -I ./proto ./proto/*.proto
	@grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src/grpc --grpc_out=grpc_js:./src/grpc proto/telegram.proto
run:
	@ts-node src/index.ts
