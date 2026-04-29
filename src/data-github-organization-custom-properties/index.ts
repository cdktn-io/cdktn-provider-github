/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGithubOrganizationCustomPropertiesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}
  */
  readonly propertyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}
  */
  readonly valueType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#values_editable_by DataGithubOrganizationCustomProperties#values_editable_by}
  */
  readonly valuesEditableBy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties github_organization_custom_properties}
*/
export class DataGithubOrganizationCustomProperties extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_organization_custom_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGithubOrganizationCustomProperties to import
  * @param importFromId The id of the existing DataGithubOrganizationCustomProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGithubOrganizationCustomProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_custom_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties github_organization_custom_properties} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubOrganizationCustomPropertiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubOrganizationCustomPropertiesConfig) {
    super(scope, id, {
      terraformResourceType: 'github_organization_custom_properties',
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
    this._allowedValues = config.allowedValues;
    this._defaultValue = config.defaultValue;
    this._description = config.description;
    this._id = config.id;
    this._propertyName = config.propertyName;
    this._required = config.required;
    this._valueType = config.valueType;
    this._valuesEditableBy = config.valuesEditableBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // property_name - computed: false, optional: false, required: true
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // values_editable_by - computed: true, optional: true, required: false
  private _valuesEditableBy?: string; 
  public get valuesEditableBy() {
    return this.getStringAttribute('values_editable_by');
  }
  public set valuesEditableBy(value: string) {
    this._valuesEditableBy = value;
  }
  public resetValuesEditableBy() {
    this._valuesEditableBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesEditableByInput() {
    return this._valuesEditableBy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedValues),
      default_value: cdktn.stringToTerraform(this._defaultValue),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      property_name: cdktn.stringToTerraform(this._propertyName),
      required: cdktn.booleanToTerraform(this._required),
      value_type: cdktn.stringToTerraform(this._valueType),
      values_editable_by: cdktn.stringToTerraform(this._valuesEditableBy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_values: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedValues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_value: {
        value: cdktn.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      property_name: {
        value: cdktn.stringToHclTerraform(this._propertyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required: {
        value: cdktn.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value_type: {
        value: cdktn.stringToHclTerraform(this._valueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      values_editable_by: {
        value: cdktn.stringToHclTerraform(this._valuesEditableBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
