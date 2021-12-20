// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_telegram_pb = require('../proto/telegram_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_telegram_LoginMessage(arg) {
  if (!(arg instanceof proto_telegram_pb.LoginMessage)) {
    throw new Error('Expected argument of type telegram.LoginMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_LoginMessage(buffer_arg) {
  return proto_telegram_pb.LoginMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_telegram_MeResponse(arg) {
  if (!(arg instanceof proto_telegram_pb.MeResponse)) {
    throw new Error('Expected argument of type telegram.MeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_MeResponse(buffer_arg) {
  return proto_telegram_pb.MeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_telegram_Result(arg) {
  if (!(arg instanceof proto_telegram_pb.Result)) {
    throw new Error('Expected argument of type telegram.Result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_Result(buffer_arg) {
  return proto_telegram_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_telegram_SignMessage(arg) {
  if (!(arg instanceof proto_telegram_pb.SignMessage)) {
    throw new Error('Expected argument of type telegram.SignMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_SignMessage(buffer_arg) {
  return proto_telegram_pb.SignMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var TelegramService = exports.TelegramService = {
  login: {
    path: '/telegram.Telegram/Login',
    requestStream: false,
    responseStream: false,
    requestType: proto_telegram_pb.LoginMessage,
    responseType: proto_telegram_pb.Result,
    requestSerialize: serialize_telegram_LoginMessage,
    requestDeserialize: deserialize_telegram_LoginMessage,
    responseSerialize: serialize_telegram_Result,
    responseDeserialize: deserialize_telegram_Result,
  },
  sign: {
    path: '/telegram.Telegram/Sign',
    requestStream: false,
    responseStream: false,
    requestType: proto_telegram_pb.SignMessage,
    responseType: proto_telegram_pb.Result,
    requestSerialize: serialize_telegram_SignMessage,
    requestDeserialize: deserialize_telegram_SignMessage,
    responseSerialize: serialize_telegram_Result,
    responseDeserialize: deserialize_telegram_Result,
  },
  me: {
    path: '/telegram.Telegram/Me',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_telegram_pb.MeResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_telegram_MeResponse,
    responseDeserialize: deserialize_telegram_MeResponse,
  },
};

exports.TelegramClient = grpc.makeGenericClientConstructor(TelegramService);
