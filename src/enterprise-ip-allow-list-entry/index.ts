/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EnterpriseIpAllowListEntryConfig extends cdktn.TerraformMetaArguments {
  /**
  * The slug of the enterprise to apply the IP allow list entry to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#enterprise_slug EnterpriseIpAllowListEntry#enterprise_slug}
  */
  readonly enterpriseSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An IP address or range of IP addresses in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#ip EnterpriseIpAllowListEntry#ip}
  */
  readonly ip: string;
  /**
  * Whether the entry is currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#is_active EnterpriseIpAllowListEntry#is_active}
  */
  readonly isActive?: boolean | cdktn.IResolvable;
  /**
  * An optional name for the IP allow list entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#name EnterpriseIpAllowListEntry#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry}
*/
export class EnterpriseIpAllowListEntry extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_enterprise_ip_allow_list_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EnterpriseIpAllowListEntry resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseIpAllowListEntry to import
  * @param importFromId The id of the existing EnterpriseIpAllowListEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseIpAllowListEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_ip_allow_list_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseIpAllowListEntryConfig
  */
  public constructor(scope: Construct, id: string, config: EnterpriseIpAllowListEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'github_enterprise_ip_allow_list_entry',
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
    this._enterpriseSlug = config.enterpriseSlug;
    this._id = config.id;
    this._ip = config.ip;
    this._isActive = config.isActive;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enterprise_slug - computed: false, optional: false, required: true
  private _enterpriseSlug?: string; 
  public get enterpriseSlug() {
    return this.getStringAttribute('enterprise_slug');
  }
  public set enterpriseSlug(value: string) {
    this._enterpriseSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSlugInput() {
    return this._enterpriseSlug;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktn.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktn.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enterprise_slug: cdktn.stringToTerraform(this._enterpriseSlug),
      id: cdktn.stringToTerraform(this._id),
      ip: cdktn.stringToTerraform(this._ip),
      is_active: cdktn.booleanToTerraform(this._isActive),
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enterprise_slug: {
        value: cdktn.stringToHclTerraform(this._enterpriseSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktn.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktn.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
