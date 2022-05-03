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

function serialize_telegram_DialogsResponse(arg) {
  if (!(arg instanceof proto_telegram_pb.DialogsResponse)) {
    throw new Error('Expected argument of type telegram.DialogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_DialogsResponse(buffer_arg) {
  return proto_telegram_pb.DialogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_telegram_GetUserRequest(arg) {
  if (!(arg instanceof proto_telegram_pb.GetUserRequest)) {
    throw new Error('Expected argument of type telegram.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_GetUserRequest(buffer_arg) {
  return proto_telegram_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_telegram_MuteChatRequest(arg) {
  if (!(arg instanceof proto_telegram_pb.MuteChatRequest)) {
    throw new Error('Expected argument of type telegram.MuteChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_MuteChatRequest(buffer_arg) {
  return proto_telegram_pb.MuteChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_telegram_MuteUserRequest(arg) {
  if (!(arg instanceof proto_telegram_pb.MuteUserRequest)) {
    throw new Error('Expected argument of type telegram.MuteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_MuteUserRequest(buffer_arg) {
  return proto_telegram_pb.MuteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_telegram_SendMessageRequest(arg) {
  if (!(arg instanceof proto_telegram_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type telegram.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_SendMessageRequest(buffer_arg) {
  return proto_telegram_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_telegram_SignResult(arg) {
  if (!(arg instanceof proto_telegram_pb.SignResult)) {
    throw new Error('Expected argument of type telegram.SignResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_SignResult(buffer_arg) {
  return proto_telegram_pb.SignResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_telegram_UserResponse(arg) {
  if (!(arg instanceof proto_telegram_pb.UserResponse)) {
    throw new Error('Expected argument of type telegram.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_telegram_UserResponse(buffer_arg) {
  return proto_telegram_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
    responseType: proto_telegram_pb.SignResult,
    requestSerialize: serialize_telegram_SignMessage,
    requestDeserialize: deserialize_telegram_SignMessage,
    responseSerialize: serialize_telegram_SignResult,
    responseDeserialize: deserialize_telegram_SignResult,
  },
  getUser: {
    path: '/telegram.Telegram/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_telegram_pb.GetUserRequest,
    responseType: proto_telegram_pb.UserResponse,
    requestSerialize: serialize_telegram_GetUserRequest,
    requestDeserialize: deserialize_telegram_GetUserRequest,
    responseSerialize: serialize_telegram_UserResponse,
    responseDeserialize: deserialize_telegram_UserResponse,
  },
  send: {
    path: '/telegram.Telegram/Send',
    requestStream: false,
    responseStream: false,
    requestType: proto_telegram_pb.SendMessageRequest,
    responseType: proto_telegram_pb.Result,
    requestSerialize: serialize_telegram_SendMessageRequest,
    requestDeserialize: deserialize_telegram_SendMessageRequest,
    responseSerialize: serialize_telegram_Result,
    responseDeserialize: deserialize_telegram_Result,
  },
  getDialogs: {
    path: '/telegram.Telegram/getDialogs',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_telegram_pb.DialogsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_telegram_DialogsResponse,
    responseDeserialize: deserialize_telegram_DialogsResponse,
  },
  muteUser: {
    path: '/telegram.Telegram/MuteUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_telegram_pb.MuteUserRequest,
    responseType: proto_telegram_pb.Result,
    requestSerialize: serialize_telegram_MuteUserRequest,
    requestDeserialize: deserialize_telegram_MuteUserRequest,
    responseSerialize: serialize_telegram_Result,
    responseDeserialize: deserialize_telegram_Result,
  },
  muteChat: {
    path: '/telegram.Telegram/MuteChat',
    requestStream: false,
    responseStream: false,
    requestType: proto_telegram_pb.MuteChatRequest,
    responseType: proto_telegram_pb.Result,
    requestSerialize: serialize_telegram_MuteChatRequest,
    requestDeserialize: deserialize_telegram_MuteChatRequest,
    responseSerialize: serialize_telegram_Result,
    responseDeserialize: deserialize_telegram_Result,
  },
};

exports.TelegramClient = grpc.makeGenericClientConstructor(TelegramService);
