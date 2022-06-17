import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const middleWares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(MetadataKeys.middleware, [...middleWares, middleware], target, key)
  };
}

