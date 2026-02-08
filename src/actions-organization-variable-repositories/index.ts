/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repositories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsOrganizationVariableRepositoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repositories#id ActionsOrganizationVariableRepositories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An array of repository ids that can access the organization variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repositories#selected_repository_ids ActionsOrganizationVariableRepositories#selected_repository_ids}
  */
  readonly selectedRepositoryIds: number[];
  /**
  * Name of the existing variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repositories#variable_name ActionsOrganizationVariableRepositories#variable_name}
  */
  readonly variableName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repositories github_actions_organization_variable_repositories}
*/
export class ActionsOrganizationVariableRepositories extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_organization_variable_repositories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionsOrganizationVariableRepositories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionsOrganizationVariableRepositories to import
  * @param importFromId The id of the existing ActionsOrganizationVariableRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repositories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionsOrganizationVariableRepositories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_variable_repositories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repositories github_actions_organization_variable_repositories} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsOrganizationVariableRepositoriesConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsOrganizationVariableRepositoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_organization_variable_repositories',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.11.0',
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
    this._id = config.id;
    this._selectedRepositoryIds = config.selectedRepositoryIds;
    this._variableName = config.variableName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // selected_repository_ids - computed: false, optional: false, required: true
  private _selectedRepositoryIds?: number[]; 
  public get selectedRepositoryIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
  }
  public set selectedRepositoryIds(value: number[]) {
    this._selectedRepositoryIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRepositoryIdsInput() {
    return this._selectedRepositoryIds;
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
      variable_name: cdktf.stringToTerraform(this._variableName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_repository_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      variable_name: {
        value: cdktf.stringToHclTerraform(this._variableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
