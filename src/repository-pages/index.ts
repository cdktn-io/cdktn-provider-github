/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RepositoryPagesAConfig extends cdktn.TerraformMetaArguments {
  /**
  * The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#build_type RepositoryPagesA#build_type}
  */
  readonly buildType?: string;
  /**
  * The custom domain for the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#cname RepositoryPagesA#cname}
  */
  readonly cname?: string;
  /**
  * Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#https_enforced RepositoryPagesA#https_enforced}
  */
  readonly httpsEnforced?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#id RepositoryPagesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#public RepositoryPagesA#public}
  */
  readonly public?: boolean | cdktn.IResolvable;
  /**
  * The repository name to configure GitHub Pages for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#repository RepositoryPagesA#repository}
  */
  readonly repository: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#source RepositoryPagesA#source}
  */
  readonly source?: RepositoryPagesSourceA;
}
export interface RepositoryPagesSourceA {
  /**
  * The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#branch RepositoryPagesA#branch}
  */
  readonly branch: string;
  /**
  * The repository directory from which the site publishes (Default: '/')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#path RepositoryPagesA#path}
  */
  readonly path?: string;
}

export function repositoryPagesSourceAToTerraform(struct?: RepositoryPagesSourceAOutputReference | RepositoryPagesSourceA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktn.stringToTerraform(struct!.branch),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function repositoryPagesSourceAToHclTerraform(struct?: RepositoryPagesSourceAOutputReference | RepositoryPagesSourceA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktn.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryPagesSourceAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryPagesSourceA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryPagesSourceA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._path = value.path;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages github_repository_pages}
*/
export class RepositoryPagesA extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_pages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryPagesA to import
  * @param importFromId The id of the existing RepositoryPagesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryPagesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages github_repository_pages} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryPagesAConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryPagesAConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_pages',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.12.1',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buildType = config.buildType;
    this._cname = config.cname;
    this._httpsEnforced = config.httpsEnforced;
    this._id = config.id;
    this._public = config.public;
    this._repository = config.repository;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // build_status - computed: true, optional: false, required: false
  public get buildStatus() {
    return this.getStringAttribute('build_status');
  }

  // build_type - computed: false, optional: true, required: false
  private _buildType?: string; 
  public get buildType() {
    return this.getStringAttribute('build_type');
  }
  public set buildType(value: string) {
    this._buildType = value;
  }
  public resetBuildType() {
    this._buildType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTypeInput() {
    return this._buildType;
  }

  // cname - computed: false, optional: true, required: false
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // custom_404 - computed: true, optional: false, required: false
  public get custom404() {
    return this.getBooleanAttribute('custom_404');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // https_enforced - computed: true, optional: true, required: false
  private _httpsEnforced?: boolean | cdktn.IResolvable; 
  public get httpsEnforced() {
    return this.getBooleanAttribute('https_enforced');
  }
  public set httpsEnforced(value: boolean | cdktn.IResolvable) {
    this._httpsEnforced = value;
  }
  public resetHttpsEnforced() {
    this._httpsEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsEnforcedInput() {
    return this._httpsEnforced;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // public - computed: true, optional: true, required: false
  private _public?: boolean | cdktn.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktn.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_id - computed: true, optional: false, required: false
  public get repositoryId() {
    return this.getNumberAttribute('repository_id');
  }

  // source - computed: false, optional: true, required: false
  private _source = new RepositoryPagesSourceAOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: RepositoryPagesSourceA) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build_type: cdktn.stringToTerraform(this._buildType),
      cname: cdktn.stringToTerraform(this._cname),
      https_enforced: cdktn.booleanToTerraform(this._httpsEnforced),
      id: cdktn.stringToTerraform(this._id),
      public: cdktn.booleanToTerraform(this._public),
      repository: cdktn.stringToTerraform(this._repository),
      source: repositoryPagesSourceAToTerraform(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      build_type: {
        value: cdktn.stringToHclTerraform(this._buildType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cname: {
        value: cdktn.stringToHclTerraform(this._cname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_enforced: {
        value: cdktn.booleanToHclTerraform(this._httpsEnforced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public: {
        value: cdktn.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository: {
        value: cdktn.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: repositoryPagesSourceAToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryPagesSourceAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
