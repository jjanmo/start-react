/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as ChatsIndexImport } from './routes/chats/index'
import { Route as ChatsChatIdImport } from './routes/chats/$chatId'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ChatsIndexRoute = ChatsIndexImport.update({
  path: '/chats/',
  getParentRoute: () => rootRoute,
} as any)

const ChatsChatIdRoute = ChatsChatIdImport.update({
  path: '/chats/$chatId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/chats/$chatId': {
      id: '/chats/$chatId'
      path: '/chats/$chatId'
      fullPath: '/chats/$chatId'
      preLoaderRoute: typeof ChatsChatIdImport
      parentRoute: typeof rootRoute
    }
    '/chats/': {
      id: '/chats/'
      path: '/chats'
      fullPath: '/chats'
      preLoaderRoute: typeof ChatsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  LoginRoute,
  SignupRoute,
  ChatsChatIdRoute,
  ChatsIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/signup",
        "/chats/$chatId",
        "/chats/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/chats/$chatId": {
      "filePath": "chats/$chatId.tsx"
    },
    "/chats/": {
      "filePath": "chats/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */