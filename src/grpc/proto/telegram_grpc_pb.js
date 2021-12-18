// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_telegram_pb = require('../proto/telegram_pb.js');

function serialize_telegram_LoginMessage(arg) {
  if (!(arg instanceof proto_telegram_pb.LoginMessage)) {
    throw new Error('Expected argument of type telegram.LoginMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_LoginMessage(buffer_arg) {
  return proto_telegram_pb.LoginMessage.deserializeBinary(new Uint8Array(buffer_arg));
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
};

exports.TelegramClient = grpc.makeGenericClientConstructor(TelegramService);
