/*
 * Copyright (c) 2015-2016 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
import che = _che;

declare namespace _che {

  export interface IRootScopeService extends ng.IRootScopeService {
    hideLoader: boolean;
    showIDE: boolean;
    wantTokeepLoader: boolean;
  }

  export namespace route {

    export interface IRouteParamsService extends ng.route.IRouteParamsService {
      action: string;
      ideParams: string | string[];
      namespace: string;
      showLogs: string;
      workspaceName: string;
      tabName: string;
    }

  }

  export interface IRegisterService {
    app: ng.IModule;
    directive(name: string, constructorFn: Function);
    filter(name: string, constructorFn: Function): che.IRegisterService;
    controller(name: string, constructorFn: Function): che.IRegisterService;
    service(name: string, constructorFn: Function): che.IRegisterService;
    provider(name: string, constructorFn: ng.IServiceProvider): che.IRegisterService;
    factory(name: string, constructorFn: Function): che.IRegisterService;
  }

  export interface IWorkspaceCommand {
    name: string;
    type: string;
    commandLine: string;
    attributes?: {
      previewUrl?: string;
      [propName: string]: string;
    };
  }

  export interface IStack {
    name: string;
    description: string;
    projects: Array<any>;
    tags: Array<string>;
    scope: string;
    components: Array<any>;
    source: any;
    workspaceConfig: IWorkspace;
  }

  export interface IWorkspace {
    id?: string;
    runtime?: any;
    temporary?: boolean;
    status?: string;
    namespace?: string;
    attributes?: {
      updated?: number;
      created?: number;
      [propName: string]: string;
    };
    config: IWorkspaceConfig;
  }

  export interface IWorkspaceConfig {
    name?: string;
    defaultEnv?: string;
    environments: {
      [envName: string]: IWorkspaceEnvironment
    };
    projects: Array <any>;
    commands?: Array <any>;
  }

  export interface IWorkspaceEnvironment {
    machines: {
      [machineName: string]: IEnvironmentMachine
    };
    recipe: {
      content?: string;
      location?: string;
      contentType: string;
      type: string;
    };
  }

  export interface IEnvironmentMachine {
    agents?: string[];
    attributes?: {
      memoryLimitBytes?: string|number;
      [attrName: string]: string|number;
    };
    servers?: {
      [serverRef: string]: IEnvironmentMachineServer
    };
  }

  export interface IEnvironmentMachineServer {
    port: string|number;
    protocol: string;
    properties?: {
      [propName: string]: string
    };
  }

  export interface IProject {
    name: string;
    displayName: string;
    description: string;
    source: {
      location: string;
      parameters: any;
      type: string;
    };
    commands: Array<any>;
    projectType: string;
    tags: Array<string>;
    attributes: Array<any>;
    options: Array<any>;
    workspaceId?: string;
    workspaceName?: string;
  }

  export interface IWorkspaceProjects {
    [workspaceId: string]: Array<IProject>;
  }

  export interface IImportProject {
    source: {
      type: string;
      location: string;
      parameters: Object;
    };
    project: {
      name: string;
      type: string;
      description: string;
      commands: Array<any>;
      attributes: Array<any>;
      options: Array<any>;
    };
  }

}
