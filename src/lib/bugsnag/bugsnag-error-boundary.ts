'use client';

import { Component } from 'react';
import { ReactNode } from 'react';
import { bugsnagClient } from './bugsnag-client';

class BugsnagErrorBoundary extends Component<{
  children: ReactNode;
}> {
  componentDidCatch(error: never) {
    if (!bugsnagClient) {
      return;
    }

    bugsnagClient.notify(error);
  }

  render() {
    return this.props.children;
  }

  getDerivedStateFromError() {
    return { hasError: false };
  }
}

export { bugsnagClient, BugsnagErrorBoundary };
