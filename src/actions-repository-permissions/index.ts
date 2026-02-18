/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ActionsRepositoryPermissionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * The permissions policy that controls the actions that are allowed to run. Can be one of: 'all', 'local_only', or 'selected'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#allowed_actions ActionsRepositoryPermissions#allowed_actions}
  */
  readonly allowedActions?: string;
  /**
  * Should GitHub actions be enabled on this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#enabled ActionsRepositoryPermissions#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#id ActionsRepositoryPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#repository ActionsRepositoryPermissions#repository}
  */
  readonly repository: string;
  /**
  * Whether pinning to a specific SHA is required for all actions and reusable workflows in a repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#sha_pinning_required ActionsRepositoryPermissions#sha_pinning_required}
  */
  readonly shaPinningRequired?: boolean | cdktn.IResolvable;
  /**
  * allowed_actions_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#allowed_actions_config ActionsRepositoryPermissions#allowed_actions_config}
  */
  readonly allowedActionsConfig?: ActionsRepositoryPermissionsAllowedActionsConfig;
}
export interface ActionsRepositoryPermissionsAllowedActionsConfig {
  /**
  * Whether GitHub-owned actions are allowed in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#github_owned_allowed ActionsRepositoryPermissions#github_owned_allowed}
  */
  readonly githubOwnedAllowed: boolean | cdktn.IResolvable;
  /**
  * Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#patterns_allowed ActionsRepositoryPermissions#patterns_allowed}
  */
  readonly patternsAllowed?: string[];
  /**
  * Whether actions in GitHub Marketplace from verified creators are allowed. Set to 'true' to allow all GitHub Marketplace actions by verified creators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#verified_allowed ActionsRepositoryPermissions#verified_allowed}
  */
  readonly verifiedAllowed?: boolean | cdktn.IResolvable;
}

export function actionsRepositoryPermissionsAllowedActionsConfigToTerraform(struct?: ActionsRepositoryPermissionsAllowedActionsConfigOutputReference | ActionsRepositoryPermissionsAllowedActionsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    github_owned_allowed: cdktn.booleanToTerraform(struct!.githubOwnedAllowed),
    patterns_allowed: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.patternsAllowed),
    verified_allowed: cdktn.booleanToTerraform(struct!.verifiedAllowed),
  }
}


export function actionsRepositoryPermissionsAllowedActionsConfigToHclTerraform(struct?: ActionsRepositoryPermissionsAllowedActionsConfigOutputReference | ActionsRepositoryPermissionsAllowedActionsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    github_owned_allowed: {
      value: cdktn.booleanToHclTerraform(struct!.githubOwnedAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patterns_allowed: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.patternsAllowed),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    verified_allowed: {
      value: cdktn.booleanToHclTerraform(struct!.verifiedAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionsRepositoryPermissionsAllowedActionsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActionsRepositoryPermissionsAllowedActionsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._githubOwnedAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOwnedAllowed = this._githubOwnedAllowed;
    }
    if (this._patternsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternsAllowed = this._patternsAllowed;
    }
    if (this._verifiedAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifiedAllowed = this._verifiedAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionsRepositoryPermissionsAllowedActionsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._githubOwnedAllowed = undefined;
      this._patternsAllowed = undefined;
      this._verifiedAllowed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._githubOwnedAllowed = value.githubOwnedAllowed;
      this._patternsAllowed = value.patternsAllowed;
      this._verifiedAllowed = value.verifiedAllowed;
    }
  }

  // github_owned_allowed - computed: false, optional: false, required: true
  private _githubOwnedAllowed?: boolean | cdktn.IResolvable; 
  public get githubOwnedAllowed() {
    return this.getBooleanAttribute('github_owned_allowed');
  }
  public set githubOwnedAllowed(value: boolean | cdktn.IResolvable) {
    this._githubOwnedAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOwnedAllowedInput() {
    return this._githubOwnedAllowed;
  }

  // patterns_allowed - computed: false, optional: true, required: false
  private _patternsAllowed?: string[]; 
  public get patternsAllowed() {
    return cdktn.Fn.tolist(this.getListAttribute('patterns_allowed'));
  }
  public set patternsAllowed(value: string[]) {
    this._patternsAllowed = value;
  }
  public resetPatternsAllowed() {
    this._patternsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsAllowedInput() {
    return this._patternsAllowed;
  }

  // verified_allowed - computed: false, optional: true, required: false
  private _verifiedAllowed?: boolean | cdktn.IResolvable; 
  public get verifiedAllowed() {
    return this.getBooleanAttribute('verified_allowed');
  }
  public set verifiedAllowed(value: boolean | cdktn.IResolvable) {
    this._verifiedAllowed = value;
  }
  public resetVerifiedAllowed() {
    this._verifiedAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedAllowedInput() {
    return this._verifiedAllowed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions github_actions_repository_permissions}
*/
export class ActionsRepositoryPermissions extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_repository_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ActionsRepositoryPermissions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionsRepositoryPermissions to import
  * @param importFromId The id of the existing ActionsRepositoryPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionsRepositoryPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_repository_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_repository_permissions github_actions_repository_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsRepositoryPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsRepositoryPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_repository_permissions',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.11.1',
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
    this._allowedActions = config.allowedActions;
    this._enabled = config.enabled;
    this._id = config.id;
    this._repository = config.repository;
    this._shaPinningRequired = config.shaPinningRequired;
    this._allowedActionsConfig.internalValue = config.allowedActionsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_actions - computed: false, optional: true, required: false
  private _allowedActions?: string; 
  public get allowedActions() {
    return this.getStringAttribute('allowed_actions');
  }
  public set allowedActions(value: string) {
    this._allowedActions = value;
  }
  public resetAllowedActions() {
    this._allowedActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedActionsInput() {
    return this._allowedActions;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // sha_pinning_required - computed: true, optional: true, required: false
  private _shaPinningRequired?: boolean | cdktn.IResolvable; 
  public get shaPinningRequired() {
    return this.getBooleanAttribute('sha_pinning_required');
  }
  public set shaPinningRequired(value: boolean | cdktn.IResolvable) {
    this._shaPinningRequired = value;
  }
  public resetShaPinningRequired() {
    this._shaPinningRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shaPinningRequiredInput() {
    return this._shaPinningRequired;
  }

  // allowed_actions_config - computed: false, optional: true, required: false
  private _allowedActionsConfig = new ActionsRepositoryPermissionsAllowedActionsConfigOutputReference(this, "allowed_actions_config");
  public get allowedActionsConfig() {
    return this._allowedActionsConfig;
  }
  public putAllowedActionsConfig(value: ActionsRepositoryPermissionsAllowedActionsConfig) {
    this._allowedActionsConfig.internalValue = value;
  }
  public resetAllowedActionsConfig() {
    this._allowedActionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedActionsConfigInput() {
    return this._allowedActionsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_actions: cdktn.stringToTerraform(this._allowedActions),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      repository: cdktn.stringToTerraform(this._repository),
      sha_pinning_required: cdktn.booleanToTerraform(this._shaPinningRequired),
      allowed_actions_config: actionsRepositoryPermissionsAllowedActionsConfigToTerraform(this._allowedActionsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_actions: {
        value: cdktn.stringToHclTerraform(this._allowedActions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
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
      repository: {
        value: cdktn.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sha_pinning_required: {
        value: cdktn.booleanToHclTerraform(this._shaPinningRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_actions_config: {
        value: actionsRepositoryPermissionsAllowedActionsConfigToHclTerraform(this._allowedActionsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActionsRepositoryPermissionsAllowedActionsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
