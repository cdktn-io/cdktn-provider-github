/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.11.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GithubProviderConfig {
  /**
  * The GitHub Base API URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#base_url GithubProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Enable `insecure` mode for testing purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#insecure GithubProvider#insecure}
  */
  readonly insecure?: boolean | cdktn.IResolvable;
  /**
  * Number of items per page for paginationDefaults to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#max_per_page GithubProvider#max_per_page}
  */
  readonly maxPerPage?: number;
  /**
  * Number of times to retry a request after receiving an error status codeDefaults to 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#max_retries GithubProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#organization GithubProvider#organization}
  */
  readonly organization?: string;
  /**
  * The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#owner GithubProvider#owner}
  */
  readonly owner?: string;
  /**
  * Allow the provider to make parallel API calls to GitHub. You may want to set it to true when you have a private Github Enterprise without strict rate limits. While it is possible to enable this setting on github.com, github.com's best practices recommend using serialization to avoid hitting abuse rate limitsDefaults to false if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#parallel_requests GithubProvider#parallel_requests}
  */
  readonly parallelRequests?: boolean | cdktn.IResolvable;
  /**
  * Amount of time in milliseconds to sleep in between non-write requests to GitHub API. Defaults to 0ms if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#read_delay_ms GithubProvider#read_delay_ms}
  */
  readonly readDelayMs?: number;
  /**
  * Amount of time in milliseconds to sleep in between requests to GitHub API after an error response. Defaults to 1000ms or 1s if not set, the max_retries must be set to greater than zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#retry_delay_ms GithubProvider#retry_delay_ms}
  */
  readonly retryDelayMs?: number;
  /**
  * Allow the provider to retry after receiving an error status code, the max_retries should be set for this to workDefaults to [500, 502, 503, 504]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#retryable_errors GithubProvider#retryable_errors}
  */
  readonly retryableErrors?: number[];
  /**
  * The OAuth token used to connect to GitHub. Anonymous mode is enabled if both `token` and `app_auth` are not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#token GithubProvider#token}
  */
  readonly token?: string;
  /**
  * Amount of time in milliseconds to sleep in between writes to GitHub API. Defaults to 1000ms or 1s if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#write_delay_ms GithubProvider#write_delay_ms}
  */
  readonly writeDelayMs?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#alias GithubProvider#alias}
  */
  readonly alias?: string;
  /**
  * app_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#app_auth GithubProvider#app_auth}
  */
  readonly appAuth?: GithubProviderAppAuth;
}
export interface GithubProviderAppAuth {
  /**
  * The GitHub App ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#id GithubProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The GitHub App installation instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#installation_id GithubProvider#installation_id}
  */
  readonly installationId: string;
  /**
  * The GitHub App PEM file contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#pem_file GithubProvider#pem_file}
  */
  readonly pemFile: string;
}

export function githubProviderAppAuthToTerraform(struct?: GithubProviderAppAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    installation_id: cdktn.stringToTerraform(struct!.installationId),
    pem_file: cdktn.stringToTerraform(struct!.pemFile),
  }
}


export function githubProviderAppAuthToHclTerraform(struct?: GithubProviderAppAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    installation_id: {
      value: cdktn.stringToHclTerraform(struct!.installationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_file: {
      value: cdktn.stringToHclTerraform(struct!.pemFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs github}
*/
export class GithubProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GithubProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GithubProvider to import
  * @param importFromId The id of the existing GithubProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GithubProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "github", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs github} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GithubProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GithubProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.11.1',
        providerVersionConstraint: '~> 6.0'
      },
      terraformProviderSource: 'integrations/github'
    });
    this._baseUrl = config.baseUrl;
    this._insecure = config.insecure;
    this._maxPerPage = config.maxPerPage;
    this._maxRetries = config.maxRetries;
    this._organization = config.organization;
    this._owner = config.owner;
    this._parallelRequests = config.parallelRequests;
    this._readDelayMs = config.readDelayMs;
    this._retryDelayMs = config.retryDelayMs;
    this._retryableErrors = config.retryableErrors;
    this._token = config.token;
    this._writeDelayMs = config.writeDelayMs;
    this._alias = config.alias;
    this._appAuth = config.appAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktn.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktn.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // max_per_page - computed: false, optional: true, required: false
  private _maxPerPage?: number; 
  public get maxPerPage() {
    return this._maxPerPage;
  }
  public set maxPerPage(value: number | undefined) {
    this._maxPerPage = value;
  }
  public resetMaxPerPage() {
    this._maxPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPerPageInput() {
    return this._maxPerPage;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this._organization;
  }
  public set organization(value: string | undefined) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this._owner;
  }
  public set owner(value: string | undefined) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // parallel_requests - computed: false, optional: true, required: false
  private _parallelRequests?: boolean | cdktn.IResolvable; 
  public get parallelRequests() {
    return this._parallelRequests;
  }
  public set parallelRequests(value: boolean | cdktn.IResolvable | undefined) {
    this._parallelRequests = value;
  }
  public resetParallelRequests() {
    this._parallelRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelRequestsInput() {
    return this._parallelRequests;
  }

  // read_delay_ms - computed: false, optional: true, required: false
  private _readDelayMs?: number; 
  public get readDelayMs() {
    return this._readDelayMs;
  }
  public set readDelayMs(value: number | undefined) {
    this._readDelayMs = value;
  }
  public resetReadDelayMs() {
    this._readDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readDelayMsInput() {
    return this._readDelayMs;
  }

  // retry_delay_ms - computed: false, optional: true, required: false
  private _retryDelayMs?: number; 
  public get retryDelayMs() {
    return this._retryDelayMs;
  }
  public set retryDelayMs(value: number | undefined) {
    this._retryDelayMs = value;
  }
  public resetRetryDelayMs() {
    this._retryDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayMsInput() {
    return this._retryDelayMs;
  }

  // retryable_errors - computed: false, optional: true, required: false
  private _retryableErrors?: number[]; 
  public get retryableErrors() {
    return this._retryableErrors;
  }
  public set retryableErrors(value: number[] | undefined) {
    this._retryableErrors = value;
  }
  public resetRetryableErrors() {
    this._retryableErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryableErrorsInput() {
    return this._retryableErrors;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // write_delay_ms - computed: false, optional: true, required: false
  private _writeDelayMs?: number; 
  public get writeDelayMs() {
    return this._writeDelayMs;
  }
  public set writeDelayMs(value: number | undefined) {
    this._writeDelayMs = value;
  }
  public resetWriteDelayMs() {
    this._writeDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDelayMsInput() {
    return this._writeDelayMs;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // app_auth - computed: false, optional: true, required: false
  private _appAuth?: GithubProviderAppAuth; 
  public get appAuth() {
    return this._appAuth;
  }
  public set appAuth(value: GithubProviderAppAuth | undefined) {
    this._appAuth = value;
  }
  public resetAppAuth() {
    this._appAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appAuthInput() {
    return this._appAuth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_url: cdktn.stringToTerraform(this._baseUrl),
      insecure: cdktn.booleanToTerraform(this._insecure),
      max_per_page: cdktn.numberToTerraform(this._maxPerPage),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      organization: cdktn.stringToTerraform(this._organization),
      owner: cdktn.stringToTerraform(this._owner),
      parallel_requests: cdktn.booleanToTerraform(this._parallelRequests),
      read_delay_ms: cdktn.numberToTerraform(this._readDelayMs),
      retry_delay_ms: cdktn.numberToTerraform(this._retryDelayMs),
      retryable_errors: cdktn.listMapper(cdktn.numberToTerraform, false)(this._retryableErrors),
      token: cdktn.stringToTerraform(this._token),
      write_delay_ms: cdktn.numberToTerraform(this._writeDelayMs),
      alias: cdktn.stringToTerraform(this._alias),
      app_auth: githubProviderAppAuthToTerraform(this._appAuth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktn.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktn.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_per_page: {
        value: cdktn.numberToHclTerraform(this._maxPerPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      organization: {
        value: cdktn.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktn.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parallel_requests: {
        value: cdktn.booleanToHclTerraform(this._parallelRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_delay_ms: {
        value: cdktn.numberToHclTerraform(this._readDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_delay_ms: {
        value: cdktn.numberToHclTerraform(this._retryDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retryable_errors: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._retryableErrors),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      token: {
        value: cdktn.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_delay_ms: {
        value: cdktn.numberToHclTerraform(this._writeDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_auth: {
        value: githubProviderAppAuthToHclTerraform(this._appAuth),
        isBlock: true,
        type: "list",
        storageClassType: "GithubProviderAppAuthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
