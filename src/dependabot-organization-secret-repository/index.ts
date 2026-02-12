/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/dependabot_organization_secret_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DependabotOrganizationSecretRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/dependabot_organization_secret_repository#id DependabotOrganizationSecretRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The repository ID that can access the organization secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/dependabot_organization_secret_repository#repository_id DependabotOrganizationSecretRepository#repository_id}
  */
  readonly repositoryId: number;
  /**
  * Name of the existing secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/dependabot_organization_secret_repository#secret_name DependabotOrganizationSecretRepository#secret_name}
  */
  readonly secretName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/dependabot_organization_secret_repository github_dependabot_organization_secret_repository}
*/
export class DependabotOrganizationSecretRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_dependabot_organization_secret_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DependabotOrganizationSecretRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DependabotOrganizationSecretRepository to import
  * @param importFromId The id of the existing DependabotOrganizationSecretRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/dependabot_organization_secret_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DependabotOrganizationSecretRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_dependabot_organization_secret_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/dependabot_organization_secret_repository github_dependabot_organization_secret_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DependabotOrganizationSecretRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DependabotOrganizationSecretRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'github_dependabot_organization_secret_repository',
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
    this._id = config.id;
    this._repositoryId = config.repositoryId;
    this._secretName = config.secretName;
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: number; 
  public get repositoryId() {
    return this.getNumberAttribute('repository_id');
  }
  public set repositoryId(value: number) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      repository_id: cdktf.numberToTerraform(this._repositoryId),
      secret_name: cdktf.stringToTerraform(this._secretName),
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
      repository_id: {
        value: cdktf.numberToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
