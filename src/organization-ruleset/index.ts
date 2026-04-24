/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OrganizationRulesetConfig extends cdktn.TerraformMetaArguments {
  /**
  * The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Possible values are `disabled`, `active`, and `evaluate`. Note: `evaluate` is only available for Enterprise plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#enforcement OrganizationRuleset#enforcement}
  */
  readonly enforcement: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name: string;
  /**
  * The target of the ruleset. Possible values are branch, tag and push.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#target OrganizationRuleset#target}
  */
  readonly target: string;
  /**
  * bypass_actors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#bypass_actors OrganizationRuleset#bypass_actors}
  */
  readonly bypassActors?: OrganizationRulesetBypassActors[] | cdktn.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#conditions OrganizationRuleset#conditions}
  */
  readonly conditions?: OrganizationRulesetConditions;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#rules OrganizationRuleset#rules}
  */
  readonly rules: OrganizationRulesetRules;
}
export interface OrganizationRulesetBypassActors {
  /**
  * The ID of the actor that can bypass a ruleset. When `actor_type` is `OrganizationAdmin`, this should be set to `1`. Some resources such as DeployKey do not have an ID and this should be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#actor_id OrganizationRuleset#actor_id}
  */
  readonly actorId?: number;
  /**
  * The type of actor that can bypass a ruleset. Can be one of: `Integration`, `OrganizationAdmin`, `RepositoryRole`, `Team`, or `DeployKey`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#actor_type OrganizationRuleset#actor_type}
  */
  readonly actorType: string;
  /**
  * When the specified actor can bypass the ruleset. pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`, `exempt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#bypass_mode OrganizationRuleset#bypass_mode}
  */
  readonly bypassMode: string;
}

export function organizationRulesetBypassActorsToTerraform(struct?: OrganizationRulesetBypassActors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actor_id: cdktn.numberToTerraform(struct!.actorId),
    actor_type: cdktn.stringToTerraform(struct!.actorType),
    bypass_mode: cdktn.stringToTerraform(struct!.bypassMode),
  }
}


export function organizationRulesetBypassActorsToHclTerraform(struct?: OrganizationRulesetBypassActors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actor_id: {
      value: cdktn.numberToHclTerraform(struct!.actorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    actor_type: {
      value: cdktn.stringToHclTerraform(struct!.actorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_mode: {
      value: cdktn.stringToHclTerraform(struct!.bypassMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetBypassActorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrganizationRulesetBypassActors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actorId = this._actorId;
    }
    if (this._actorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actorType = this._actorType;
    }
    if (this._bypassMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassMode = this._bypassMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetBypassActors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actorId = undefined;
      this._actorType = undefined;
      this._bypassMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actorId = value.actorId;
      this._actorType = value.actorType;
      this._bypassMode = value.bypassMode;
    }
  }

  // actor_id - computed: false, optional: true, required: false
  private _actorId?: number; 
  public get actorId() {
    return this.getNumberAttribute('actor_id');
  }
  public set actorId(value: number) {
    this._actorId = value;
  }
  public resetActorId() {
    this._actorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorIdInput() {
    return this._actorId;
  }

  // actor_type - computed: false, optional: false, required: true
  private _actorType?: string; 
  public get actorType() {
    return this.getStringAttribute('actor_type');
  }
  public set actorType(value: string) {
    this._actorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actorTypeInput() {
    return this._actorType;
  }

  // bypass_mode - computed: false, optional: false, required: true
  private _bypassMode?: string; 
  public get bypassMode() {
    return this.getStringAttribute('bypass_mode');
  }
  public set bypassMode(value: string) {
    this._bypassMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassModeInput() {
    return this._bypassMode;
  }
}

export class OrganizationRulesetBypassActorsList extends cdktn.ComplexList {
  public internalValue? : OrganizationRulesetBypassActors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrganizationRulesetBypassActorsOutputReference {
    return new OrganizationRulesetBypassActorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetConditionsRefName {
  /**
  * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}
  */
  readonly exclude: string[];
  /**
  * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}
  */
  readonly include: string[];
}

export function organizationRulesetConditionsRefNameToTerraform(struct?: OrganizationRulesetConditionsRefNameOutputReference | OrganizationRulesetConditionsRefName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
    include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
  }
}


export function organizationRulesetConditionsRefNameToHclTerraform(struct?: OrganizationRulesetConditionsRefNameOutputReference | OrganizationRulesetConditionsRefName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetConditionsRefNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetConditionsRefName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetConditionsRefName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: false, required: true
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface OrganizationRulesetConditionsRepositoryName {
  /**
  * Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}
  */
  readonly exclude: string[];
  /**
  * Array of repository names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}
  */
  readonly include: string[];
  /**
  * Whether renaming of target repositories is prevented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#protected OrganizationRuleset#protected}
  */
  readonly protected?: boolean | cdktn.IResolvable;
}

export function organizationRulesetConditionsRepositoryNameToTerraform(struct?: OrganizationRulesetConditionsRepositoryNameOutputReference | OrganizationRulesetConditionsRepositoryName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
    include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
    protected: cdktn.booleanToTerraform(struct!.protected),
  }
}


export function organizationRulesetConditionsRepositoryNameToHclTerraform(struct?: OrganizationRulesetConditionsRepositoryNameOutputReference | OrganizationRulesetConditionsRepositoryName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protected: {
      value: cdktn.booleanToHclTerraform(struct!.protected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetConditionsRepositoryNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetConditionsRepositoryName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._protected !== undefined) {
      hasAnyValues = true;
      internalValueResult.protected = this._protected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetConditionsRepositoryName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._protected = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._protected = value.protected;
    }
  }

  // exclude - computed: false, optional: false, required: true
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // protected - computed: false, optional: true, required: false
  private _protected?: boolean | cdktn.IResolvable; 
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
  public set protected(value: boolean | cdktn.IResolvable) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected;
  }
}
export interface OrganizationRulesetConditionsRepositoryPropertyExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#property_values OrganizationRuleset#property_values}
  */
  readonly propertyValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#source OrganizationRuleset#source}
  */
  readonly source?: string;
}

export function organizationRulesetConditionsRepositoryPropertyExcludeToTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    property_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.propertyValues),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function organizationRulesetConditionsRepositoryPropertyExcludeToHclTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.propertyValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrganizationRulesetConditionsRepositoryPropertyExclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValues = this._propertyValues;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetConditionsRepositoryPropertyExclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._propertyValues = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._propertyValues = value.propertyValues;
      this._source = value.source;
    }
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

  // property_values - computed: false, optional: true, required: false
  private _propertyValues?: string[]; 
  public get propertyValues() {
    return this.getListAttribute('property_values');
  }
  public set propertyValues(value: string[]) {
    this._propertyValues = value;
  }
  public resetPropertyValues() {
    this._propertyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValuesInput() {
    return this._propertyValues;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class OrganizationRulesetConditionsRepositoryPropertyExcludeList extends cdktn.ComplexList {
  public internalValue? : OrganizationRulesetConditionsRepositoryPropertyExclude[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference {
    return new OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetConditionsRepositoryPropertyInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#property_values OrganizationRuleset#property_values}
  */
  readonly propertyValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#source OrganizationRuleset#source}
  */
  readonly source?: string;
}

export function organizationRulesetConditionsRepositoryPropertyIncludeToTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    property_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.propertyValues),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function organizationRulesetConditionsRepositoryPropertyIncludeToHclTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.propertyValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrganizationRulesetConditionsRepositoryPropertyInclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValues = this._propertyValues;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetConditionsRepositoryPropertyInclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._propertyValues = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._propertyValues = value.propertyValues;
      this._source = value.source;
    }
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

  // property_values - computed: false, optional: true, required: false
  private _propertyValues?: string[]; 
  public get propertyValues() {
    return this.getListAttribute('property_values');
  }
  public set propertyValues(value: string[]) {
    this._propertyValues = value;
  }
  public resetPropertyValues() {
    this._propertyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValuesInput() {
    return this._propertyValues;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class OrganizationRulesetConditionsRepositoryPropertyIncludeList extends cdktn.ComplexList {
  public internalValue? : OrganizationRulesetConditionsRepositoryPropertyInclude[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference {
    return new OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetConditionsRepositoryProperty {
  /**
  * The repository properties and values to exclude. The ruleset will not apply if any of these properties match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}
  */
  readonly exclude?: OrganizationRulesetConditionsRepositoryPropertyExclude[] | cdktn.IResolvable;
  /**
  * The repository properties and values to include. All of these properties must match for the condition to pass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}
  */
  readonly include?: OrganizationRulesetConditionsRepositoryPropertyInclude[] | cdktn.IResolvable;
}

export function organizationRulesetConditionsRepositoryPropertyToTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyOutputReference | OrganizationRulesetConditionsRepositoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktn.listMapper(organizationRulesetConditionsRepositoryPropertyExcludeToTerraform, false)(struct!.exclude),
    include: cdktn.listMapper(organizationRulesetConditionsRepositoryPropertyIncludeToTerraform, false)(struct!.include),
  }
}


export function organizationRulesetConditionsRepositoryPropertyToHclTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyOutputReference | OrganizationRulesetConditionsRepositoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktn.listMapperHcl(organizationRulesetConditionsRepositoryPropertyExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetConditionsRepositoryPropertyExcludeList",
    },
    include: {
      value: cdktn.listMapperHcl(organizationRulesetConditionsRepositoryPropertyIncludeToHclTerraform, false)(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetConditionsRepositoryPropertyIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetConditionsRepositoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetConditionsRepositoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetConditionsRepositoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude.internalValue = value.exclude;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new OrganizationRulesetConditionsRepositoryPropertyExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: OrganizationRulesetConditionsRepositoryPropertyExclude[] | cdktn.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new OrganizationRulesetConditionsRepositoryPropertyIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: OrganizationRulesetConditionsRepositoryPropertyInclude[] | cdktn.IResolvable) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface OrganizationRulesetConditions {
  /**
  * The repository IDs that the ruleset applies to. One of these IDs must match for the ruleset to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}
  */
  readonly repositoryId?: number[];
  /**
  * ref_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#ref_name OrganizationRuleset#ref_name}
  */
  readonly refName?: OrganizationRulesetConditionsRefName;
  /**
  * repository_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#repository_name OrganizationRuleset#repository_name}
  */
  readonly repositoryName?: OrganizationRulesetConditionsRepositoryName;
  /**
  * repository_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#repository_property OrganizationRuleset#repository_property}
  */
  readonly repositoryProperty?: OrganizationRulesetConditionsRepositoryProperty;
}

export function organizationRulesetConditionsToTerraform(struct?: OrganizationRulesetConditionsOutputReference | OrganizationRulesetConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_id: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.repositoryId),
    ref_name: organizationRulesetConditionsRefNameToTerraform(struct!.refName),
    repository_name: organizationRulesetConditionsRepositoryNameToTerraform(struct!.repositoryName),
    repository_property: organizationRulesetConditionsRepositoryPropertyToTerraform(struct!.repositoryProperty),
  }
}


export function organizationRulesetConditionsToHclTerraform(struct?: OrganizationRulesetConditionsOutputReference | OrganizationRulesetConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_id: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.repositoryId),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ref_name: {
      value: organizationRulesetConditionsRefNameToHclTerraform(struct!.refName),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetConditionsRefNameList",
    },
    repository_name: {
      value: organizationRulesetConditionsRepositoryNameToHclTerraform(struct!.repositoryName),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetConditionsRepositoryNameList",
    },
    repository_property: {
      value: organizationRulesetConditionsRepositoryPropertyToHclTerraform(struct!.repositoryProperty),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetConditionsRepositoryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    if (this._refName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refName = this._refName?.internalValue;
    }
    if (this._repositoryName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName?.internalValue;
    }
    if (this._repositoryProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryProperty = this._repositoryProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryId = undefined;
      this._refName.internalValue = undefined;
      this._repositoryName.internalValue = undefined;
      this._repositoryProperty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryId = value.repositoryId;
      this._refName.internalValue = value.refName;
      this._repositoryName.internalValue = value.repositoryName;
      this._repositoryProperty.internalValue = value.repositoryProperty;
    }
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: number[]; 
  public get repositoryId() {
    return this.getNumberListAttribute('repository_id');
  }
  public set repositoryId(value: number[]) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // ref_name - computed: false, optional: true, required: false
  private _refName = new OrganizationRulesetConditionsRefNameOutputReference(this, "ref_name");
  public get refName() {
    return this._refName;
  }
  public putRefName(value: OrganizationRulesetConditionsRefName) {
    this._refName.internalValue = value;
  }
  public resetRefName() {
    this._refName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refNameInput() {
    return this._refName.internalValue;
  }

  // repository_name - computed: false, optional: true, required: false
  private _repositoryName = new OrganizationRulesetConditionsRepositoryNameOutputReference(this, "repository_name");
  public get repositoryName() {
    return this._repositoryName;
  }
  public putRepositoryName(value: OrganizationRulesetConditionsRepositoryName) {
    this._repositoryName.internalValue = value;
  }
  public resetRepositoryName() {
    this._repositoryName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName.internalValue;
  }

  // repository_property - computed: false, optional: true, required: false
  private _repositoryProperty = new OrganizationRulesetConditionsRepositoryPropertyOutputReference(this, "repository_property");
  public get repositoryProperty() {
    return this._repositoryProperty;
  }
  public putRepositoryProperty(value: OrganizationRulesetConditionsRepositoryProperty) {
    this._repositoryProperty.internalValue = value;
  }
  public resetRepositoryProperty() {
    this._repositoryProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPropertyInput() {
    return this._repositoryProperty.internalValue;
  }
}
export interface OrganizationRulesetRulesBranchNamePattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesBranchNamePatternToTerraform(struct?: OrganizationRulesetRulesBranchNamePatternOutputReference | OrganizationRulesetRulesBranchNamePattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    negate: cdktn.booleanToTerraform(struct!.negate),
    operator: cdktn.stringToTerraform(struct!.operator),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function organizationRulesetRulesBranchNamePatternToHclTerraform(struct?: OrganizationRulesetRulesBranchNamePatternOutputReference | OrganizationRulesetRulesBranchNamePattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesBranchNamePatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesBranchNamePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesBranchNamePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
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

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface OrganizationRulesetRulesCommitAuthorEmailPattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesCommitAuthorEmailPatternToTerraform(struct?: OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference | OrganizationRulesetRulesCommitAuthorEmailPattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    negate: cdktn.booleanToTerraform(struct!.negate),
    operator: cdktn.stringToTerraform(struct!.operator),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function organizationRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct?: OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference | OrganizationRulesetRulesCommitAuthorEmailPattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesCommitAuthorEmailPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesCommitAuthorEmailPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
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

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface OrganizationRulesetRulesCommitMessagePattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesCommitMessagePatternToTerraform(struct?: OrganizationRulesetRulesCommitMessagePatternOutputReference | OrganizationRulesetRulesCommitMessagePattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    negate: cdktn.booleanToTerraform(struct!.negate),
    operator: cdktn.stringToTerraform(struct!.operator),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function organizationRulesetRulesCommitMessagePatternToHclTerraform(struct?: OrganizationRulesetRulesCommitMessagePatternOutputReference | OrganizationRulesetRulesCommitMessagePattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesCommitMessagePatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesCommitMessagePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesCommitMessagePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
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

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface OrganizationRulesetRulesCommitterEmailPattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesCommitterEmailPatternToTerraform(struct?: OrganizationRulesetRulesCommitterEmailPatternOutputReference | OrganizationRulesetRulesCommitterEmailPattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    negate: cdktn.booleanToTerraform(struct!.negate),
    operator: cdktn.stringToTerraform(struct!.operator),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function organizationRulesetRulesCommitterEmailPatternToHclTerraform(struct?: OrganizationRulesetRulesCommitterEmailPatternOutputReference | OrganizationRulesetRulesCommitterEmailPattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesCommitterEmailPatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesCommitterEmailPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesCommitterEmailPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
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

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface OrganizationRulesetRulesCopilotCodeReview {
  /**
  * Copilot automatically reviews draft pull requests before they are marked as ready for review. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#review_draft_pull_requests OrganizationRuleset#review_draft_pull_requests}
  */
  readonly reviewDraftPullRequests?: boolean | cdktn.IResolvable;
  /**
  * Copilot automatically reviews each new push to the pull request. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#review_on_push OrganizationRuleset#review_on_push}
  */
  readonly reviewOnPush?: boolean | cdktn.IResolvable;
}

export function organizationRulesetRulesCopilotCodeReviewToTerraform(struct?: OrganizationRulesetRulesCopilotCodeReviewOutputReference | OrganizationRulesetRulesCopilotCodeReview): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    review_draft_pull_requests: cdktn.booleanToTerraform(struct!.reviewDraftPullRequests),
    review_on_push: cdktn.booleanToTerraform(struct!.reviewOnPush),
  }
}


export function organizationRulesetRulesCopilotCodeReviewToHclTerraform(struct?: OrganizationRulesetRulesCopilotCodeReviewOutputReference | OrganizationRulesetRulesCopilotCodeReview): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    review_draft_pull_requests: {
      value: cdktn.booleanToHclTerraform(struct!.reviewDraftPullRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    review_on_push: {
      value: cdktn.booleanToHclTerraform(struct!.reviewOnPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesCopilotCodeReviewOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesCopilotCodeReview | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reviewDraftPullRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewDraftPullRequests = this._reviewDraftPullRequests;
    }
    if (this._reviewOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewOnPush = this._reviewOnPush;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesCopilotCodeReview | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reviewDraftPullRequests = undefined;
      this._reviewOnPush = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reviewDraftPullRequests = value.reviewDraftPullRequests;
      this._reviewOnPush = value.reviewOnPush;
    }
  }

  // review_draft_pull_requests - computed: false, optional: true, required: false
  private _reviewDraftPullRequests?: boolean | cdktn.IResolvable; 
  public get reviewDraftPullRequests() {
    return this.getBooleanAttribute('review_draft_pull_requests');
  }
  public set reviewDraftPullRequests(value: boolean | cdktn.IResolvable) {
    this._reviewDraftPullRequests = value;
  }
  public resetReviewDraftPullRequests() {
    this._reviewDraftPullRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewDraftPullRequestsInput() {
    return this._reviewDraftPullRequests;
  }

  // review_on_push - computed: false, optional: true, required: false
  private _reviewOnPush?: boolean | cdktn.IResolvable; 
  public get reviewOnPush() {
    return this.getBooleanAttribute('review_on_push');
  }
  public set reviewOnPush(value: boolean | cdktn.IResolvable) {
    this._reviewOnPush = value;
  }
  public resetReviewOnPush() {
    this._reviewOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewOnPushInput() {
    return this._reviewOnPush;
  }
}
export interface OrganizationRulesetRulesFileExtensionRestriction {
  /**
  * The file extensions that are restricted from being pushed to the commit graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#restricted_file_extensions OrganizationRuleset#restricted_file_extensions}
  */
  readonly restrictedFileExtensions: string[];
}

export function organizationRulesetRulesFileExtensionRestrictionToTerraform(struct?: OrganizationRulesetRulesFileExtensionRestrictionOutputReference | OrganizationRulesetRulesFileExtensionRestriction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restricted_file_extensions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.restrictedFileExtensions),
  }
}


export function organizationRulesetRulesFileExtensionRestrictionToHclTerraform(struct?: OrganizationRulesetRulesFileExtensionRestrictionOutputReference | OrganizationRulesetRulesFileExtensionRestriction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restricted_file_extensions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.restrictedFileExtensions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesFileExtensionRestrictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesFileExtensionRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedFileExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedFileExtensions = this._restrictedFileExtensions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesFileExtensionRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictedFileExtensions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictedFileExtensions = value.restrictedFileExtensions;
    }
  }

  // restricted_file_extensions - computed: false, optional: false, required: true
  private _restrictedFileExtensions?: string[]; 
  public get restrictedFileExtensions() {
    return cdktn.Fn.tolist(this.getListAttribute('restricted_file_extensions'));
  }
  public set restrictedFileExtensions(value: string[]) {
    this._restrictedFileExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedFileExtensionsInput() {
    return this._restrictedFileExtensions;
  }
}
export interface OrganizationRulesetRulesFilePathRestriction {
  /**
  * The file paths that are restricted from being pushed to the commit graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#restricted_file_paths OrganizationRuleset#restricted_file_paths}
  */
  readonly restrictedFilePaths: string[];
}

export function organizationRulesetRulesFilePathRestrictionToTerraform(struct?: OrganizationRulesetRulesFilePathRestrictionOutputReference | OrganizationRulesetRulesFilePathRestriction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restricted_file_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.restrictedFilePaths),
  }
}


export function organizationRulesetRulesFilePathRestrictionToHclTerraform(struct?: OrganizationRulesetRulesFilePathRestrictionOutputReference | OrganizationRulesetRulesFilePathRestriction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restricted_file_paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.restrictedFilePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesFilePathRestrictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesFilePathRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedFilePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedFilePaths = this._restrictedFilePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesFilePathRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictedFilePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictedFilePaths = value.restrictedFilePaths;
    }
  }

  // restricted_file_paths - computed: false, optional: false, required: true
  private _restrictedFilePaths?: string[]; 
  public get restrictedFilePaths() {
    return this.getListAttribute('restricted_file_paths');
  }
  public set restrictedFilePaths(value: string[]) {
    this._restrictedFilePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedFilePathsInput() {
    return this._restrictedFilePaths;
  }
}
export interface OrganizationRulesetRulesMaxFilePathLength {
  /**
  * The maximum allowed length of a file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}
  */
  readonly maxFilePathLength: number;
}

export function organizationRulesetRulesMaxFilePathLengthToTerraform(struct?: OrganizationRulesetRulesMaxFilePathLengthOutputReference | OrganizationRulesetRulesMaxFilePathLength): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_file_path_length: cdktn.numberToTerraform(struct!.maxFilePathLength),
  }
}


export function organizationRulesetRulesMaxFilePathLengthToHclTerraform(struct?: OrganizationRulesetRulesMaxFilePathLengthOutputReference | OrganizationRulesetRulesMaxFilePathLength): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_file_path_length: {
      value: cdktn.numberToHclTerraform(struct!.maxFilePathLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesMaxFilePathLengthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesMaxFilePathLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFilePathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFilePathLength = this._maxFilePathLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesMaxFilePathLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFilePathLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFilePathLength = value.maxFilePathLength;
    }
  }

  // max_file_path_length - computed: false, optional: false, required: true
  private _maxFilePathLength?: number; 
  public get maxFilePathLength() {
    return this.getNumberAttribute('max_file_path_length');
  }
  public set maxFilePathLength(value: number) {
    this._maxFilePathLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilePathLengthInput() {
    return this._maxFilePathLength;
  }
}
export interface OrganizationRulesetRulesMaxFileSize {
  /**
  * The maximum allowed size of a file in megabytes (MB). Valid range is 1-100 MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}
  */
  readonly maxFileSize: number;
}

export function organizationRulesetRulesMaxFileSizeToTerraform(struct?: OrganizationRulesetRulesMaxFileSizeOutputReference | OrganizationRulesetRulesMaxFileSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
  }
}


export function organizationRulesetRulesMaxFileSizeToHclTerraform(struct?: OrganizationRulesetRulesMaxFileSizeOutputReference | OrganizationRulesetRulesMaxFileSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_file_size: {
      value: cdktn.numberToHclTerraform(struct!.maxFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesMaxFileSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesMaxFileSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesMaxFileSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFileSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFileSize = value.maxFileSize;
    }
  }

  // max_file_size - computed: false, optional: false, required: true
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }
}
export interface OrganizationRulesetRulesPullRequestRequiredReviewersReviewer {
  /**
  * The ID of the reviewer that must review.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The type of reviewer. Currently only `Team` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#type OrganizationRuleset#type}
  */
  readonly type: string;
}

export function organizationRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct?: OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference | OrganizationRulesetRulesPullRequestRequiredReviewersReviewer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.numberToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function organizationRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct?: OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference | OrganizationRulesetRulesPullRequestRequiredReviewersReviewer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesPullRequestRequiredReviewersReviewer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesPullRequestRequiredReviewersReviewer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface OrganizationRulesetRulesPullRequestRequiredReviewers {
  /**
  * File patterns (fnmatch syntax) that this reviewer must approve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#file_patterns OrganizationRuleset#file_patterns}
  */
  readonly filePatterns: string[];
  /**
  * Minimum number of approvals required from this reviewer. Set to 0 to make approval optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#minimum_approvals OrganizationRuleset#minimum_approvals}
  */
  readonly minimumApprovals: number;
  /**
  * reviewer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#reviewer OrganizationRuleset#reviewer}
  */
  readonly reviewer: OrganizationRulesetRulesPullRequestRequiredReviewersReviewer;
}

export function organizationRulesetRulesPullRequestRequiredReviewersToTerraform(struct?: OrganizationRulesetRulesPullRequestRequiredReviewers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filePatterns),
    minimum_approvals: cdktn.numberToTerraform(struct!.minimumApprovals),
    reviewer: organizationRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct!.reviewer),
  }
}


export function organizationRulesetRulesPullRequestRequiredReviewersToHclTerraform(struct?: OrganizationRulesetRulesPullRequestRequiredReviewers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    minimum_approvals: {
      value: cdktn.numberToHclTerraform(struct!.minimumApprovals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reviewer: {
      value: organizationRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct!.reviewer),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesPullRequestRequiredReviewersReviewerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrganizationRulesetRulesPullRequestRequiredReviewers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePatterns = this._filePatterns;
    }
    if (this._minimumApprovals !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumApprovals = this._minimumApprovals;
    }
    if (this._reviewer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewer = this._reviewer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesPullRequestRequiredReviewers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filePatterns = undefined;
      this._minimumApprovals = undefined;
      this._reviewer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filePatterns = value.filePatterns;
      this._minimumApprovals = value.minimumApprovals;
      this._reviewer.internalValue = value.reviewer;
    }
  }

  // file_patterns - computed: false, optional: false, required: true
  private _filePatterns?: string[]; 
  public get filePatterns() {
    return this.getListAttribute('file_patterns');
  }
  public set filePatterns(value: string[]) {
    this._filePatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternsInput() {
    return this._filePatterns;
  }

  // minimum_approvals - computed: false, optional: false, required: true
  private _minimumApprovals?: number; 
  public get minimumApprovals() {
    return this.getNumberAttribute('minimum_approvals');
  }
  public set minimumApprovals(value: number) {
    this._minimumApprovals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumApprovalsInput() {
    return this._minimumApprovals;
  }

  // reviewer - computed: false, optional: false, required: true
  private _reviewer = new OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference(this, "reviewer");
  public get reviewer() {
    return this._reviewer;
  }
  public putReviewer(value: OrganizationRulesetRulesPullRequestRequiredReviewersReviewer) {
    this._reviewer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerInput() {
    return this._reviewer.internalValue;
  }
}

export class OrganizationRulesetRulesPullRequestRequiredReviewersList extends cdktn.ComplexList {
  public internalValue? : OrganizationRulesetRulesPullRequestRequiredReviewers[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference {
    return new OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetRulesPullRequest {
  /**
  * Array of allowed merge methods. Allowed values include `merge`, `squash`, and `rebase`. At least one option must be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#allowed_merge_methods OrganizationRuleset#allowed_merge_methods}
  */
  readonly allowedMergeMethods?: string[];
  /**
  * New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#dismiss_stale_reviews_on_push OrganizationRuleset#dismiss_stale_reviews_on_push}
  */
  readonly dismissStaleReviewsOnPush?: boolean | cdktn.IResolvable;
  /**
  * Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#require_code_owner_review OrganizationRuleset#require_code_owner_review}
  */
  readonly requireCodeOwnerReview?: boolean | cdktn.IResolvable;
  /**
  * Whether the most recent reviewable push must be approved by someone other than the person who pushed it. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#require_last_push_approval OrganizationRuleset#require_last_push_approval}
  */
  readonly requireLastPushApproval?: boolean | cdktn.IResolvable;
  /**
  * The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_approving_review_count OrganizationRuleset#required_approving_review_count}
  */
  readonly requiredApprovingReviewCount?: number;
  /**
  * All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_review_thread_resolution OrganizationRuleset#required_review_thread_resolution}
  */
  readonly requiredReviewThreadResolution?: boolean | cdktn.IResolvable;
  /**
  * required_reviewers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_reviewers OrganizationRuleset#required_reviewers}
  */
  readonly requiredReviewers?: OrganizationRulesetRulesPullRequestRequiredReviewers[] | cdktn.IResolvable;
}

export function organizationRulesetRulesPullRequestToTerraform(struct?: OrganizationRulesetRulesPullRequestOutputReference | OrganizationRulesetRulesPullRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_merge_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedMergeMethods),
    dismiss_stale_reviews_on_push: cdktn.booleanToTerraform(struct!.dismissStaleReviewsOnPush),
    require_code_owner_review: cdktn.booleanToTerraform(struct!.requireCodeOwnerReview),
    require_last_push_approval: cdktn.booleanToTerraform(struct!.requireLastPushApproval),
    required_approving_review_count: cdktn.numberToTerraform(struct!.requiredApprovingReviewCount),
    required_review_thread_resolution: cdktn.booleanToTerraform(struct!.requiredReviewThreadResolution),
    required_reviewers: cdktn.listMapper(organizationRulesetRulesPullRequestRequiredReviewersToTerraform, true)(struct!.requiredReviewers),
  }
}


export function organizationRulesetRulesPullRequestToHclTerraform(struct?: OrganizationRulesetRulesPullRequestOutputReference | OrganizationRulesetRulesPullRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_merge_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedMergeMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dismiss_stale_reviews_on_push: {
      value: cdktn.booleanToHclTerraform(struct!.dismissStaleReviewsOnPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_code_owner_review: {
      value: cdktn.booleanToHclTerraform(struct!.requireCodeOwnerReview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_last_push_approval: {
      value: cdktn.booleanToHclTerraform(struct!.requireLastPushApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_approving_review_count: {
      value: cdktn.numberToHclTerraform(struct!.requiredApprovingReviewCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_review_thread_resolution: {
      value: cdktn.booleanToHclTerraform(struct!.requiredReviewThreadResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_reviewers: {
      value: cdktn.listMapperHcl(organizationRulesetRulesPullRequestRequiredReviewersToHclTerraform, true)(struct!.requiredReviewers),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesPullRequestRequiredReviewersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesPullRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMergeMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMergeMethods = this._allowedMergeMethods;
    }
    if (this._dismissStaleReviewsOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.dismissStaleReviewsOnPush = this._dismissStaleReviewsOnPush;
    }
    if (this._requireCodeOwnerReview !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCodeOwnerReview = this._requireCodeOwnerReview;
    }
    if (this._requireLastPushApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireLastPushApproval = this._requireLastPushApproval;
    }
    if (this._requiredApprovingReviewCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredApprovingReviewCount = this._requiredApprovingReviewCount;
    }
    if (this._requiredReviewThreadResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredReviewThreadResolution = this._requiredReviewThreadResolution;
    }
    if (this._requiredReviewers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredReviewers = this._requiredReviewers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedMergeMethods = undefined;
      this._dismissStaleReviewsOnPush = undefined;
      this._requireCodeOwnerReview = undefined;
      this._requireLastPushApproval = undefined;
      this._requiredApprovingReviewCount = undefined;
      this._requiredReviewThreadResolution = undefined;
      this._requiredReviewers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedMergeMethods = value.allowedMergeMethods;
      this._dismissStaleReviewsOnPush = value.dismissStaleReviewsOnPush;
      this._requireCodeOwnerReview = value.requireCodeOwnerReview;
      this._requireLastPushApproval = value.requireLastPushApproval;
      this._requiredApprovingReviewCount = value.requiredApprovingReviewCount;
      this._requiredReviewThreadResolution = value.requiredReviewThreadResolution;
      this._requiredReviewers.internalValue = value.requiredReviewers;
    }
  }

  // allowed_merge_methods - computed: true, optional: true, required: false
  private _allowedMergeMethods?: string[]; 
  public get allowedMergeMethods() {
    return this.getListAttribute('allowed_merge_methods');
  }
  public set allowedMergeMethods(value: string[]) {
    this._allowedMergeMethods = value;
  }
  public resetAllowedMergeMethods() {
    this._allowedMergeMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMergeMethodsInput() {
    return this._allowedMergeMethods;
  }

  // dismiss_stale_reviews_on_push - computed: false, optional: true, required: false
  private _dismissStaleReviewsOnPush?: boolean | cdktn.IResolvable; 
  public get dismissStaleReviewsOnPush() {
    return this.getBooleanAttribute('dismiss_stale_reviews_on_push');
  }
  public set dismissStaleReviewsOnPush(value: boolean | cdktn.IResolvable) {
    this._dismissStaleReviewsOnPush = value;
  }
  public resetDismissStaleReviewsOnPush() {
    this._dismissStaleReviewsOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dismissStaleReviewsOnPushInput() {
    return this._dismissStaleReviewsOnPush;
  }

  // require_code_owner_review - computed: false, optional: true, required: false
  private _requireCodeOwnerReview?: boolean | cdktn.IResolvable; 
  public get requireCodeOwnerReview() {
    return this.getBooleanAttribute('require_code_owner_review');
  }
  public set requireCodeOwnerReview(value: boolean | cdktn.IResolvable) {
    this._requireCodeOwnerReview = value;
  }
  public resetRequireCodeOwnerReview() {
    this._requireCodeOwnerReview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCodeOwnerReviewInput() {
    return this._requireCodeOwnerReview;
  }

  // require_last_push_approval - computed: false, optional: true, required: false
  private _requireLastPushApproval?: boolean | cdktn.IResolvable; 
  public get requireLastPushApproval() {
    return this.getBooleanAttribute('require_last_push_approval');
  }
  public set requireLastPushApproval(value: boolean | cdktn.IResolvable) {
    this._requireLastPushApproval = value;
  }
  public resetRequireLastPushApproval() {
    this._requireLastPushApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLastPushApprovalInput() {
    return this._requireLastPushApproval;
  }

  // required_approving_review_count - computed: false, optional: true, required: false
  private _requiredApprovingReviewCount?: number; 
  public get requiredApprovingReviewCount() {
    return this.getNumberAttribute('required_approving_review_count');
  }
  public set requiredApprovingReviewCount(value: number) {
    this._requiredApprovingReviewCount = value;
  }
  public resetRequiredApprovingReviewCount() {
    this._requiredApprovingReviewCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovingReviewCountInput() {
    return this._requiredApprovingReviewCount;
  }

  // required_review_thread_resolution - computed: false, optional: true, required: false
  private _requiredReviewThreadResolution?: boolean | cdktn.IResolvable; 
  public get requiredReviewThreadResolution() {
    return this.getBooleanAttribute('required_review_thread_resolution');
  }
  public set requiredReviewThreadResolution(value: boolean | cdktn.IResolvable) {
    this._requiredReviewThreadResolution = value;
  }
  public resetRequiredReviewThreadResolution() {
    this._requiredReviewThreadResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredReviewThreadResolutionInput() {
    return this._requiredReviewThreadResolution;
  }

  // required_reviewers - computed: false, optional: true, required: false
  private _requiredReviewers = new OrganizationRulesetRulesPullRequestRequiredReviewersList(this, "required_reviewers", false);
  public get requiredReviewers() {
    return this._requiredReviewers;
  }
  public putRequiredReviewers(value: OrganizationRulesetRulesPullRequestRequiredReviewers[] | cdktn.IResolvable) {
    this._requiredReviewers.internalValue = value;
  }
  public resetRequiredReviewers() {
    this._requiredReviewers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredReviewersInput() {
    return this._requiredReviewers.internalValue;
  }
}
export interface OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool {
  /**
  * The severity level at which code scanning results that raise alerts block a reference update. Can be one of: `none`, `errors`, `errors_and_warnings`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#alerts_threshold OrganizationRuleset#alerts_threshold}
  */
  readonly alertsThreshold: string;
  /**
  * The severity level at which code scanning results that raise security alerts block a reference update. Can be one of: `none`, `critical`, `high_or_higher`, `medium_or_higher`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#security_alerts_threshold OrganizationRuleset#security_alerts_threshold}
  */
  readonly securityAlertsThreshold: string;
  /**
  * The name of a code scanning tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#tool OrganizationRuleset#tool}
  */
  readonly tool: string;
}

export function organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerts_threshold: cdktn.stringToTerraform(struct!.alertsThreshold),
    security_alerts_threshold: cdktn.stringToTerraform(struct!.securityAlertsThreshold),
    tool: cdktn.stringToTerraform(struct!.tool),
  }
}


export function organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerts_threshold: {
      value: cdktn.stringToHclTerraform(struct!.alertsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_alerts_threshold: {
      value: cdktn.stringToHclTerraform(struct!.securityAlertsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktn.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertsThreshold = this._alertsThreshold;
    }
    if (this._securityAlertsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAlertsThreshold = this._securityAlertsThreshold;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertsThreshold = undefined;
      this._securityAlertsThreshold = undefined;
      this._tool = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertsThreshold = value.alertsThreshold;
      this._securityAlertsThreshold = value.securityAlertsThreshold;
      this._tool = value.tool;
    }
  }

  // alerts_threshold - computed: false, optional: false, required: true
  private _alertsThreshold?: string; 
  public get alertsThreshold() {
    return this.getStringAttribute('alerts_threshold');
  }
  public set alertsThreshold(value: string) {
    this._alertsThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsThresholdInput() {
    return this._alertsThreshold;
  }

  // security_alerts_threshold - computed: false, optional: false, required: true
  private _securityAlertsThreshold?: string; 
  public get securityAlertsThreshold() {
    return this.getStringAttribute('security_alerts_threshold');
  }
  public set securityAlertsThreshold(value: string) {
    this._securityAlertsThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAlertsThresholdInput() {
    return this._securityAlertsThreshold;
  }

  // tool - computed: false, optional: false, required: true
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }
}

export class OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList extends cdktn.ComplexList {
  public internalValue? : OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference {
    return new OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetRulesRequiredCodeScanning {
  /**
  * required_code_scanning_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_code_scanning_tool OrganizationRuleset#required_code_scanning_tool}
  */
  readonly requiredCodeScanningTool: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktn.IResolvable;
}

export function organizationRulesetRulesRequiredCodeScanningToTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningOutputReference | OrganizationRulesetRulesRequiredCodeScanning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required_code_scanning_tool: cdktn.listMapper(organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform, true)(struct!.requiredCodeScanningTool),
  }
}


export function organizationRulesetRulesRequiredCodeScanningToHclTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningOutputReference | OrganizationRulesetRulesRequiredCodeScanning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required_code_scanning_tool: {
      value: cdktn.listMapperHcl(organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform, true)(struct!.requiredCodeScanningTool),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredCodeScanningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesRequiredCodeScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiredCodeScanningTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredCodeScanningTool = this._requiredCodeScanningTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredCodeScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requiredCodeScanningTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requiredCodeScanningTool.internalValue = value.requiredCodeScanningTool;
    }
  }

  // required_code_scanning_tool - computed: false, optional: false, required: true
  private _requiredCodeScanningTool = new OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(this, "required_code_scanning_tool", true);
  public get requiredCodeScanningTool() {
    return this._requiredCodeScanningTool;
  }
  public putRequiredCodeScanningTool(value: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktn.IResolvable) {
    this._requiredCodeScanningTool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCodeScanningToolInput() {
    return this._requiredCodeScanningTool.internalValue;
  }
}
export interface OrganizationRulesetRulesRequiredStatusChecksRequiredCheck {
  /**
  * The status check context name that must be present on the commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#context OrganizationRuleset#context}
  */
  readonly context: string;
  /**
  * The optional integration ID that this status check must originate from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#integration_id OrganizationRuleset#integration_id}
  */
  readonly integrationId?: number;
}

export function organizationRulesetRulesRequiredStatusChecksRequiredCheckToTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktn.stringToTerraform(struct!.context),
    integration_id: cdktn.numberToTerraform(struct!.integrationId),
  }
}


export function organizationRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktn.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_id: {
      value: cdktn.numberToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._integrationId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._integrationId = value.integrationId;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: number; 
  public get integrationId() {
    return this.getNumberAttribute('integration_id');
  }
  public set integrationId(value: number) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }
}

export class OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList extends cdktn.ComplexList {
  public internalValue? : OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference {
    return new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetRulesRequiredStatusChecks {
  /**
  * Allow repositories and branches to be created if a check would otherwise prohibit it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}
  */
  readonly doNotEnforceOnCreate?: boolean | cdktn.IResolvable;
  /**
  * Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#strict_required_status_checks_policy OrganizationRuleset#strict_required_status_checks_policy}
  */
  readonly strictRequiredStatusChecksPolicy?: boolean | cdktn.IResolvable;
  /**
  * required_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_check OrganizationRuleset#required_check}
  */
  readonly requiredCheck: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktn.IResolvable;
}

export function organizationRulesetRulesRequiredStatusChecksToTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksOutputReference | OrganizationRulesetRulesRequiredStatusChecks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do_not_enforce_on_create: cdktn.booleanToTerraform(struct!.doNotEnforceOnCreate),
    strict_required_status_checks_policy: cdktn.booleanToTerraform(struct!.strictRequiredStatusChecksPolicy),
    required_check: cdktn.listMapper(organizationRulesetRulesRequiredStatusChecksRequiredCheckToTerraform, true)(struct!.requiredCheck),
  }
}


export function organizationRulesetRulesRequiredStatusChecksToHclTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksOutputReference | OrganizationRulesetRulesRequiredStatusChecks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    do_not_enforce_on_create: {
      value: cdktn.booleanToHclTerraform(struct!.doNotEnforceOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_required_status_checks_policy: {
      value: cdktn.booleanToHclTerraform(struct!.strictRequiredStatusChecksPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_check: {
      value: cdktn.listMapperHcl(organizationRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform, true)(struct!.requiredCheck),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredStatusChecksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesRequiredStatusChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doNotEnforceOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotEnforceOnCreate = this._doNotEnforceOnCreate;
    }
    if (this._strictRequiredStatusChecksPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictRequiredStatusChecksPolicy = this._strictRequiredStatusChecksPolicy;
    }
    if (this._requiredCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredCheck = this._requiredCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredStatusChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._doNotEnforceOnCreate = undefined;
      this._strictRequiredStatusChecksPolicy = undefined;
      this._requiredCheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._doNotEnforceOnCreate = value.doNotEnforceOnCreate;
      this._strictRequiredStatusChecksPolicy = value.strictRequiredStatusChecksPolicy;
      this._requiredCheck.internalValue = value.requiredCheck;
    }
  }

  // do_not_enforce_on_create - computed: false, optional: true, required: false
  private _doNotEnforceOnCreate?: boolean | cdktn.IResolvable; 
  public get doNotEnforceOnCreate() {
    return this.getBooleanAttribute('do_not_enforce_on_create');
  }
  public set doNotEnforceOnCreate(value: boolean | cdktn.IResolvable) {
    this._doNotEnforceOnCreate = value;
  }
  public resetDoNotEnforceOnCreate() {
    this._doNotEnforceOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotEnforceOnCreateInput() {
    return this._doNotEnforceOnCreate;
  }

  // strict_required_status_checks_policy - computed: false, optional: true, required: false
  private _strictRequiredStatusChecksPolicy?: boolean | cdktn.IResolvable; 
  public get strictRequiredStatusChecksPolicy() {
    return this.getBooleanAttribute('strict_required_status_checks_policy');
  }
  public set strictRequiredStatusChecksPolicy(value: boolean | cdktn.IResolvable) {
    this._strictRequiredStatusChecksPolicy = value;
  }
  public resetStrictRequiredStatusChecksPolicy() {
    this._strictRequiredStatusChecksPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictRequiredStatusChecksPolicyInput() {
    return this._strictRequiredStatusChecksPolicy;
  }

  // required_check - computed: false, optional: false, required: true
  private _requiredCheck = new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList(this, "required_check", true);
  public get requiredCheck() {
    return this._requiredCheck;
  }
  public putRequiredCheck(value: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktn.IResolvable) {
    this._requiredCheck.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCheckInput() {
    return this._requiredCheck.internalValue;
  }
}
export interface OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow {
  /**
  * The path to the workflow YAML definition file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#path OrganizationRuleset#path}
  */
  readonly path: string;
  /**
  * The ref (branch or tag) of the workflow file to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#ref OrganizationRuleset#ref}
  */
  readonly ref?: string;
  /**
  * The repository in which the workflow is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}
  */
  readonly repositoryId: number;
}

export function organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    ref: cdktn.stringToTerraform(struct!.ref),
    repository_id: cdktn.numberToTerraform(struct!.repositoryId),
  }
}


export function organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToHclTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktn.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktn.numberToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repositoryId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._ref = value.ref;
      this._repositoryId = value.repositoryId;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
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
}

export class OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList extends cdktn.ComplexList {
  public internalValue? : OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference {
    return new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationRulesetRulesRequiredWorkflows {
  /**
  * Allow repositories and branches to be created if a check would otherwise prohibit it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}
  */
  readonly doNotEnforceOnCreate?: boolean | cdktn.IResolvable;
  /**
  * required_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_workflow OrganizationRuleset#required_workflow}
  */
  readonly requiredWorkflow: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[] | cdktn.IResolvable;
}

export function organizationRulesetRulesRequiredWorkflowsToTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsOutputReference | OrganizationRulesetRulesRequiredWorkflows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do_not_enforce_on_create: cdktn.booleanToTerraform(struct!.doNotEnforceOnCreate),
    required_workflow: cdktn.listMapper(organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToTerraform, true)(struct!.requiredWorkflow),
  }
}


export function organizationRulesetRulesRequiredWorkflowsToHclTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsOutputReference | OrganizationRulesetRulesRequiredWorkflows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    do_not_enforce_on_create: {
      value: cdktn.booleanToHclTerraform(struct!.doNotEnforceOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_workflow: {
      value: cdktn.listMapperHcl(organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToHclTerraform, true)(struct!.requiredWorkflow),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesRequiredWorkflowsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesRequiredWorkflows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doNotEnforceOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotEnforceOnCreate = this._doNotEnforceOnCreate;
    }
    if (this._requiredWorkflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredWorkflow = this._requiredWorkflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesRequiredWorkflows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._doNotEnforceOnCreate = undefined;
      this._requiredWorkflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._doNotEnforceOnCreate = value.doNotEnforceOnCreate;
      this._requiredWorkflow.internalValue = value.requiredWorkflow;
    }
  }

  // do_not_enforce_on_create - computed: false, optional: true, required: false
  private _doNotEnforceOnCreate?: boolean | cdktn.IResolvable; 
  public get doNotEnforceOnCreate() {
    return this.getBooleanAttribute('do_not_enforce_on_create');
  }
  public set doNotEnforceOnCreate(value: boolean | cdktn.IResolvable) {
    this._doNotEnforceOnCreate = value;
  }
  public resetDoNotEnforceOnCreate() {
    this._doNotEnforceOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotEnforceOnCreateInput() {
    return this._doNotEnforceOnCreate;
  }

  // required_workflow - computed: false, optional: false, required: true
  private _requiredWorkflow = new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList(this, "required_workflow", true);
  public get requiredWorkflow() {
    return this._requiredWorkflow;
  }
  public putRequiredWorkflow(value: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[] | cdktn.IResolvable) {
    this._requiredWorkflow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredWorkflowInput() {
    return this._requiredWorkflow.internalValue;
  }
}
export interface OrganizationRulesetRulesTagNamePattern {
  /**
  * How this rule will appear to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
  */
  readonly name?: string;
  /**
  * If true, the rule will fail if the pattern matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
  */
  readonly operator: string;
  /**
  * The pattern to match with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
  */
  readonly pattern: string;
}

export function organizationRulesetRulesTagNamePatternToTerraform(struct?: OrganizationRulesetRulesTagNamePatternOutputReference | OrganizationRulesetRulesTagNamePattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    negate: cdktn.booleanToTerraform(struct!.negate),
    operator: cdktn.stringToTerraform(struct!.operator),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function organizationRulesetRulesTagNamePatternToHclTerraform(struct?: OrganizationRulesetRulesTagNamePatternOutputReference | OrganizationRulesetRulesTagNamePattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesTagNamePatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRulesTagNamePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRulesTagNamePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._negate = value.negate;
      this._operator = value.operator;
      this._pattern = value.pattern;
    }
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

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface OrganizationRulesetRules {
  /**
  * Only allow users with bypass permission to create matching refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#creation OrganizationRuleset#creation}
  */
  readonly creation?: boolean | cdktn.IResolvable;
  /**
  * Only allow users with bypass permissions to delete matching refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#deletion OrganizationRuleset#deletion}
  */
  readonly deletion?: boolean | cdktn.IResolvable;
  /**
  * Prevent users with push access from force pushing to refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#non_fast_forward OrganizationRuleset#non_fast_forward}
  */
  readonly nonFastForward?: boolean | cdktn.IResolvable;
  /**
  * Prevent merge commits from being pushed to matching branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_linear_history OrganizationRuleset#required_linear_history}
  */
  readonly requiredLinearHistory?: boolean | cdktn.IResolvable;
  /**
  * Commits pushed to matching branches must have verified signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_signatures OrganizationRuleset#required_signatures}
  */
  readonly requiredSignatures?: boolean | cdktn.IResolvable;
  /**
  * Only allow users with bypass permission to update matching refs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#update OrganizationRuleset#update}
  */
  readonly update?: boolean | cdktn.IResolvable;
  /**
  * branch_name_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#branch_name_pattern OrganizationRuleset#branch_name_pattern}
  */
  readonly branchNamePattern?: OrganizationRulesetRulesBranchNamePattern;
  /**
  * commit_author_email_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#commit_author_email_pattern OrganizationRuleset#commit_author_email_pattern}
  */
  readonly commitAuthorEmailPattern?: OrganizationRulesetRulesCommitAuthorEmailPattern;
  /**
  * commit_message_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#commit_message_pattern OrganizationRuleset#commit_message_pattern}
  */
  readonly commitMessagePattern?: OrganizationRulesetRulesCommitMessagePattern;
  /**
  * committer_email_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#committer_email_pattern OrganizationRuleset#committer_email_pattern}
  */
  readonly committerEmailPattern?: OrganizationRulesetRulesCommitterEmailPattern;
  /**
  * copilot_code_review block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#copilot_code_review OrganizationRuleset#copilot_code_review}
  */
  readonly copilotCodeReview?: OrganizationRulesetRulesCopilotCodeReview;
  /**
  * file_extension_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#file_extension_restriction OrganizationRuleset#file_extension_restriction}
  */
  readonly fileExtensionRestriction?: OrganizationRulesetRulesFileExtensionRestriction;
  /**
  * file_path_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#file_path_restriction OrganizationRuleset#file_path_restriction}
  */
  readonly filePathRestriction?: OrganizationRulesetRulesFilePathRestriction;
  /**
  * max_file_path_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}
  */
  readonly maxFilePathLength?: OrganizationRulesetRulesMaxFilePathLength;
  /**
  * max_file_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}
  */
  readonly maxFileSize?: OrganizationRulesetRulesMaxFileSize;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pull_request OrganizationRuleset#pull_request}
  */
  readonly pullRequest?: OrganizationRulesetRulesPullRequest;
  /**
  * required_code_scanning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_code_scanning OrganizationRuleset#required_code_scanning}
  */
  readonly requiredCodeScanning?: OrganizationRulesetRulesRequiredCodeScanning;
  /**
  * required_status_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_status_checks OrganizationRuleset#required_status_checks}
  */
  readonly requiredStatusChecks?: OrganizationRulesetRulesRequiredStatusChecks;
  /**
  * required_workflows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_workflows OrganizationRuleset#required_workflows}
  */
  readonly requiredWorkflows?: OrganizationRulesetRulesRequiredWorkflows;
  /**
  * tag_name_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#tag_name_pattern OrganizationRuleset#tag_name_pattern}
  */
  readonly tagNamePattern?: OrganizationRulesetRulesTagNamePattern;
}

export function organizationRulesetRulesToTerraform(struct?: OrganizationRulesetRulesOutputReference | OrganizationRulesetRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation: cdktn.booleanToTerraform(struct!.creation),
    deletion: cdktn.booleanToTerraform(struct!.deletion),
    non_fast_forward: cdktn.booleanToTerraform(struct!.nonFastForward),
    required_linear_history: cdktn.booleanToTerraform(struct!.requiredLinearHistory),
    required_signatures: cdktn.booleanToTerraform(struct!.requiredSignatures),
    update: cdktn.booleanToTerraform(struct!.update),
    branch_name_pattern: organizationRulesetRulesBranchNamePatternToTerraform(struct!.branchNamePattern),
    commit_author_email_pattern: organizationRulesetRulesCommitAuthorEmailPatternToTerraform(struct!.commitAuthorEmailPattern),
    commit_message_pattern: organizationRulesetRulesCommitMessagePatternToTerraform(struct!.commitMessagePattern),
    committer_email_pattern: organizationRulesetRulesCommitterEmailPatternToTerraform(struct!.committerEmailPattern),
    copilot_code_review: organizationRulesetRulesCopilotCodeReviewToTerraform(struct!.copilotCodeReview),
    file_extension_restriction: organizationRulesetRulesFileExtensionRestrictionToTerraform(struct!.fileExtensionRestriction),
    file_path_restriction: organizationRulesetRulesFilePathRestrictionToTerraform(struct!.filePathRestriction),
    max_file_path_length: organizationRulesetRulesMaxFilePathLengthToTerraform(struct!.maxFilePathLength),
    max_file_size: organizationRulesetRulesMaxFileSizeToTerraform(struct!.maxFileSize),
    pull_request: organizationRulesetRulesPullRequestToTerraform(struct!.pullRequest),
    required_code_scanning: organizationRulesetRulesRequiredCodeScanningToTerraform(struct!.requiredCodeScanning),
    required_status_checks: organizationRulesetRulesRequiredStatusChecksToTerraform(struct!.requiredStatusChecks),
    required_workflows: organizationRulesetRulesRequiredWorkflowsToTerraform(struct!.requiredWorkflows),
    tag_name_pattern: organizationRulesetRulesTagNamePatternToTerraform(struct!.tagNamePattern),
  }
}


export function organizationRulesetRulesToHclTerraform(struct?: OrganizationRulesetRulesOutputReference | OrganizationRulesetRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation: {
      value: cdktn.booleanToHclTerraform(struct!.creation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deletion: {
      value: cdktn.booleanToHclTerraform(struct!.deletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_fast_forward: {
      value: cdktn.booleanToHclTerraform(struct!.nonFastForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_linear_history: {
      value: cdktn.booleanToHclTerraform(struct!.requiredLinearHistory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_signatures: {
      value: cdktn.booleanToHclTerraform(struct!.requiredSignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update: {
      value: cdktn.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    branch_name_pattern: {
      value: organizationRulesetRulesBranchNamePatternToHclTerraform(struct!.branchNamePattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesBranchNamePatternList",
    },
    commit_author_email_pattern: {
      value: organizationRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct!.commitAuthorEmailPattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesCommitAuthorEmailPatternList",
    },
    commit_message_pattern: {
      value: organizationRulesetRulesCommitMessagePatternToHclTerraform(struct!.commitMessagePattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesCommitMessagePatternList",
    },
    committer_email_pattern: {
      value: organizationRulesetRulesCommitterEmailPatternToHclTerraform(struct!.committerEmailPattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesCommitterEmailPatternList",
    },
    copilot_code_review: {
      value: organizationRulesetRulesCopilotCodeReviewToHclTerraform(struct!.copilotCodeReview),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesCopilotCodeReviewList",
    },
    file_extension_restriction: {
      value: organizationRulesetRulesFileExtensionRestrictionToHclTerraform(struct!.fileExtensionRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesFileExtensionRestrictionList",
    },
    file_path_restriction: {
      value: organizationRulesetRulesFilePathRestrictionToHclTerraform(struct!.filePathRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesFilePathRestrictionList",
    },
    max_file_path_length: {
      value: organizationRulesetRulesMaxFilePathLengthToHclTerraform(struct!.maxFilePathLength),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesMaxFilePathLengthList",
    },
    max_file_size: {
      value: organizationRulesetRulesMaxFileSizeToHclTerraform(struct!.maxFileSize),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesMaxFileSizeList",
    },
    pull_request: {
      value: organizationRulesetRulesPullRequestToHclTerraform(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesPullRequestList",
    },
    required_code_scanning: {
      value: organizationRulesetRulesRequiredCodeScanningToHclTerraform(struct!.requiredCodeScanning),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesRequiredCodeScanningList",
    },
    required_status_checks: {
      value: organizationRulesetRulesRequiredStatusChecksToHclTerraform(struct!.requiredStatusChecks),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesRequiredStatusChecksList",
    },
    required_workflows: {
      value: organizationRulesetRulesRequiredWorkflowsToHclTerraform(struct!.requiredWorkflows),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesRequiredWorkflowsList",
    },
    tag_name_pattern: {
      value: organizationRulesetRulesTagNamePatternToHclTerraform(struct!.tagNamePattern),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationRulesetRulesTagNamePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRulesetRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationRulesetRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.creation = this._creation;
    }
    if (this._deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletion = this._deletion;
    }
    if (this._nonFastForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonFastForward = this._nonFastForward;
    }
    if (this._requiredLinearHistory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredLinearHistory = this._requiredLinearHistory;
    }
    if (this._requiredSignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredSignatures = this._requiredSignatures;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._branchNamePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchNamePattern = this._branchNamePattern?.internalValue;
    }
    if (this._commitAuthorEmailPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitAuthorEmailPattern = this._commitAuthorEmailPattern?.internalValue;
    }
    if (this._commitMessagePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitMessagePattern = this._commitMessagePattern?.internalValue;
    }
    if (this._committerEmailPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.committerEmailPattern = this._committerEmailPattern?.internalValue;
    }
    if (this._copilotCodeReview?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copilotCodeReview = this._copilotCodeReview?.internalValue;
    }
    if (this._fileExtensionRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestriction = this._fileExtensionRestriction?.internalValue;
    }
    if (this._filePathRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePathRestriction = this._filePathRestriction?.internalValue;
    }
    if (this._maxFilePathLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFilePathLength = this._maxFilePathLength?.internalValue;
    }
    if (this._maxFileSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize?.internalValue;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._requiredCodeScanning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredCodeScanning = this._requiredCodeScanning?.internalValue;
    }
    if (this._requiredStatusChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredStatusChecks = this._requiredStatusChecks?.internalValue;
    }
    if (this._requiredWorkflows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredWorkflows = this._requiredWorkflows?.internalValue;
    }
    if (this._tagNamePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagNamePattern = this._tagNamePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRulesetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._creation = undefined;
      this._deletion = undefined;
      this._nonFastForward = undefined;
      this._requiredLinearHistory = undefined;
      this._requiredSignatures = undefined;
      this._update = undefined;
      this._branchNamePattern.internalValue = undefined;
      this._commitAuthorEmailPattern.internalValue = undefined;
      this._commitMessagePattern.internalValue = undefined;
      this._committerEmailPattern.internalValue = undefined;
      this._copilotCodeReview.internalValue = undefined;
      this._fileExtensionRestriction.internalValue = undefined;
      this._filePathRestriction.internalValue = undefined;
      this._maxFilePathLength.internalValue = undefined;
      this._maxFileSize.internalValue = undefined;
      this._pullRequest.internalValue = undefined;
      this._requiredCodeScanning.internalValue = undefined;
      this._requiredStatusChecks.internalValue = undefined;
      this._requiredWorkflows.internalValue = undefined;
      this._tagNamePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._creation = value.creation;
      this._deletion = value.deletion;
      this._nonFastForward = value.nonFastForward;
      this._requiredLinearHistory = value.requiredLinearHistory;
      this._requiredSignatures = value.requiredSignatures;
      this._update = value.update;
      this._branchNamePattern.internalValue = value.branchNamePattern;
      this._commitAuthorEmailPattern.internalValue = value.commitAuthorEmailPattern;
      this._commitMessagePattern.internalValue = value.commitMessagePattern;
      this._committerEmailPattern.internalValue = value.committerEmailPattern;
      this._copilotCodeReview.internalValue = value.copilotCodeReview;
      this._fileExtensionRestriction.internalValue = value.fileExtensionRestriction;
      this._filePathRestriction.internalValue = value.filePathRestriction;
      this._maxFilePathLength.internalValue = value.maxFilePathLength;
      this._maxFileSize.internalValue = value.maxFileSize;
      this._pullRequest.internalValue = value.pullRequest;
      this._requiredCodeScanning.internalValue = value.requiredCodeScanning;
      this._requiredStatusChecks.internalValue = value.requiredStatusChecks;
      this._requiredWorkflows.internalValue = value.requiredWorkflows;
      this._tagNamePattern.internalValue = value.tagNamePattern;
    }
  }

  // creation - computed: false, optional: true, required: false
  private _creation?: boolean | cdktn.IResolvable; 
  public get creation() {
    return this.getBooleanAttribute('creation');
  }
  public set creation(value: boolean | cdktn.IResolvable) {
    this._creation = value;
  }
  public resetCreation() {
    this._creation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationInput() {
    return this._creation;
  }

  // deletion - computed: false, optional: true, required: false
  private _deletion?: boolean | cdktn.IResolvable; 
  public get deletion() {
    return this.getBooleanAttribute('deletion');
  }
  public set deletion(value: boolean | cdktn.IResolvable) {
    this._deletion = value;
  }
  public resetDeletion() {
    this._deletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionInput() {
    return this._deletion;
  }

  // non_fast_forward - computed: false, optional: true, required: false
  private _nonFastForward?: boolean | cdktn.IResolvable; 
  public get nonFastForward() {
    return this.getBooleanAttribute('non_fast_forward');
  }
  public set nonFastForward(value: boolean | cdktn.IResolvable) {
    this._nonFastForward = value;
  }
  public resetNonFastForward() {
    this._nonFastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonFastForwardInput() {
    return this._nonFastForward;
  }

  // required_linear_history - computed: false, optional: true, required: false
  private _requiredLinearHistory?: boolean | cdktn.IResolvable; 
  public get requiredLinearHistory() {
    return this.getBooleanAttribute('required_linear_history');
  }
  public set requiredLinearHistory(value: boolean | cdktn.IResolvable) {
    this._requiredLinearHistory = value;
  }
  public resetRequiredLinearHistory() {
    this._requiredLinearHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredLinearHistoryInput() {
    return this._requiredLinearHistory;
  }

  // required_signatures - computed: false, optional: true, required: false
  private _requiredSignatures?: boolean | cdktn.IResolvable; 
  public get requiredSignatures() {
    return this.getBooleanAttribute('required_signatures');
  }
  public set requiredSignatures(value: boolean | cdktn.IResolvable) {
    this._requiredSignatures = value;
  }
  public resetRequiredSignatures() {
    this._requiredSignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredSignaturesInput() {
    return this._requiredSignatures;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktn.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktn.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // branch_name_pattern - computed: false, optional: true, required: false
  private _branchNamePattern = new OrganizationRulesetRulesBranchNamePatternOutputReference(this, "branch_name_pattern");
  public get branchNamePattern() {
    return this._branchNamePattern;
  }
  public putBranchNamePattern(value: OrganizationRulesetRulesBranchNamePattern) {
    this._branchNamePattern.internalValue = value;
  }
  public resetBranchNamePattern() {
    this._branchNamePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNamePatternInput() {
    return this._branchNamePattern.internalValue;
  }

  // commit_author_email_pattern - computed: false, optional: true, required: false
  private _commitAuthorEmailPattern = new OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference(this, "commit_author_email_pattern");
  public get commitAuthorEmailPattern() {
    return this._commitAuthorEmailPattern;
  }
  public putCommitAuthorEmailPattern(value: OrganizationRulesetRulesCommitAuthorEmailPattern) {
    this._commitAuthorEmailPattern.internalValue = value;
  }
  public resetCommitAuthorEmailPattern() {
    this._commitAuthorEmailPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitAuthorEmailPatternInput() {
    return this._commitAuthorEmailPattern.internalValue;
  }

  // commit_message_pattern - computed: false, optional: true, required: false
  private _commitMessagePattern = new OrganizationRulesetRulesCommitMessagePatternOutputReference(this, "commit_message_pattern");
  public get commitMessagePattern() {
    return this._commitMessagePattern;
  }
  public putCommitMessagePattern(value: OrganizationRulesetRulesCommitMessagePattern) {
    this._commitMessagePattern.internalValue = value;
  }
  public resetCommitMessagePattern() {
    this._commitMessagePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessagePatternInput() {
    return this._commitMessagePattern.internalValue;
  }

  // committer_email_pattern - computed: false, optional: true, required: false
  private _committerEmailPattern = new OrganizationRulesetRulesCommitterEmailPatternOutputReference(this, "committer_email_pattern");
  public get committerEmailPattern() {
    return this._committerEmailPattern;
  }
  public putCommitterEmailPattern(value: OrganizationRulesetRulesCommitterEmailPattern) {
    this._committerEmailPattern.internalValue = value;
  }
  public resetCommitterEmailPattern() {
    this._committerEmailPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get committerEmailPatternInput() {
    return this._committerEmailPattern.internalValue;
  }

  // copilot_code_review - computed: false, optional: true, required: false
  private _copilotCodeReview = new OrganizationRulesetRulesCopilotCodeReviewOutputReference(this, "copilot_code_review");
  public get copilotCodeReview() {
    return this._copilotCodeReview;
  }
  public putCopilotCodeReview(value: OrganizationRulesetRulesCopilotCodeReview) {
    this._copilotCodeReview.internalValue = value;
  }
  public resetCopilotCodeReview() {
    this._copilotCodeReview.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copilotCodeReviewInput() {
    return this._copilotCodeReview.internalValue;
  }

  // file_extension_restriction - computed: false, optional: true, required: false
  private _fileExtensionRestriction = new OrganizationRulesetRulesFileExtensionRestrictionOutputReference(this, "file_extension_restriction");
  public get fileExtensionRestriction() {
    return this._fileExtensionRestriction;
  }
  public putFileExtensionRestriction(value: OrganizationRulesetRulesFileExtensionRestriction) {
    this._fileExtensionRestriction.internalValue = value;
  }
  public resetFileExtensionRestriction() {
    this._fileExtensionRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionInput() {
    return this._fileExtensionRestriction.internalValue;
  }

  // file_path_restriction - computed: false, optional: true, required: false
  private _filePathRestriction = new OrganizationRulesetRulesFilePathRestrictionOutputReference(this, "file_path_restriction");
  public get filePathRestriction() {
    return this._filePathRestriction;
  }
  public putFilePathRestriction(value: OrganizationRulesetRulesFilePathRestriction) {
    this._filePathRestriction.internalValue = value;
  }
  public resetFilePathRestriction() {
    this._filePathRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathRestrictionInput() {
    return this._filePathRestriction.internalValue;
  }

  // max_file_path_length - computed: false, optional: true, required: false
  private _maxFilePathLength = new OrganizationRulesetRulesMaxFilePathLengthOutputReference(this, "max_file_path_length");
  public get maxFilePathLength() {
    return this._maxFilePathLength;
  }
  public putMaxFilePathLength(value: OrganizationRulesetRulesMaxFilePathLength) {
    this._maxFilePathLength.internalValue = value;
  }
  public resetMaxFilePathLength() {
    this._maxFilePathLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilePathLengthInput() {
    return this._maxFilePathLength.internalValue;
  }

  // max_file_size - computed: false, optional: true, required: false
  private _maxFileSize = new OrganizationRulesetRulesMaxFileSizeOutputReference(this, "max_file_size");
  public get maxFileSize() {
    return this._maxFileSize;
  }
  public putMaxFileSize(value: OrganizationRulesetRulesMaxFileSize) {
    this._maxFileSize.internalValue = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize.internalValue;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new OrganizationRulesetRulesPullRequestOutputReference(this, "pull_request");
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: OrganizationRulesetRulesPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // required_code_scanning - computed: false, optional: true, required: false
  private _requiredCodeScanning = new OrganizationRulesetRulesRequiredCodeScanningOutputReference(this, "required_code_scanning");
  public get requiredCodeScanning() {
    return this._requiredCodeScanning;
  }
  public putRequiredCodeScanning(value: OrganizationRulesetRulesRequiredCodeScanning) {
    this._requiredCodeScanning.internalValue = value;
  }
  public resetRequiredCodeScanning() {
    this._requiredCodeScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCodeScanningInput() {
    return this._requiredCodeScanning.internalValue;
  }

  // required_status_checks - computed: false, optional: true, required: false
  private _requiredStatusChecks = new OrganizationRulesetRulesRequiredStatusChecksOutputReference(this, "required_status_checks");
  public get requiredStatusChecks() {
    return this._requiredStatusChecks;
  }
  public putRequiredStatusChecks(value: OrganizationRulesetRulesRequiredStatusChecks) {
    this._requiredStatusChecks.internalValue = value;
  }
  public resetRequiredStatusChecks() {
    this._requiredStatusChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredStatusChecksInput() {
    return this._requiredStatusChecks.internalValue;
  }

  // required_workflows - computed: false, optional: true, required: false
  private _requiredWorkflows = new OrganizationRulesetRulesRequiredWorkflowsOutputReference(this, "required_workflows");
  public get requiredWorkflows() {
    return this._requiredWorkflows;
  }
  public putRequiredWorkflows(value: OrganizationRulesetRulesRequiredWorkflows) {
    this._requiredWorkflows.internalValue = value;
  }
  public resetRequiredWorkflows() {
    this._requiredWorkflows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredWorkflowsInput() {
    return this._requiredWorkflows.internalValue;
  }

  // tag_name_pattern - computed: false, optional: true, required: false
  private _tagNamePattern = new OrganizationRulesetRulesTagNamePatternOutputReference(this, "tag_name_pattern");
  public get tagNamePattern() {
    return this._tagNamePattern;
  }
  public putTagNamePattern(value: OrganizationRulesetRulesTagNamePattern) {
    this._tagNamePattern.internalValue = value;
  }
  public resetTagNamePattern() {
    this._tagNamePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamePatternInput() {
    return this._tagNamePattern.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset github_organization_ruleset}
*/
export class OrganizationRuleset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_organization_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OrganizationRuleset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationRuleset to import
  * @param importFromId The id of the existing OrganizationRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset github_organization_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'github_organization_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.12.0',
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
    this._enforcement = config.enforcement;
    this._id = config.id;
    this._name = config.name;
    this._target = config.target;
    this._bypassActors.internalValue = config.bypassActors;
    this._conditions.internalValue = config.conditions;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enforcement - computed: false, optional: false, required: true
  private _enforcement?: string; 
  public get enforcement() {
    return this.getStringAttribute('enforcement');
  }
  public set enforcement(value: string) {
    this._enforcement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementInput() {
    return this._enforcement;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // ruleset_id - computed: true, optional: false, required: false
  public get rulesetId() {
    return this.getNumberAttribute('ruleset_id');
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // bypass_actors - computed: false, optional: true, required: false
  private _bypassActors = new OrganizationRulesetBypassActorsList(this, "bypass_actors", false);
  public get bypassActors() {
    return this._bypassActors;
  }
  public putBypassActors(value: OrganizationRulesetBypassActors[] | cdktn.IResolvable) {
    this._bypassActors.internalValue = value;
  }
  public resetBypassActors() {
    this._bypassActors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassActorsInput() {
    return this._bypassActors.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new OrganizationRulesetConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: OrganizationRulesetConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new OrganizationRulesetRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: OrganizationRulesetRules) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enforcement: cdktn.stringToTerraform(this._enforcement),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      target: cdktn.stringToTerraform(this._target),
      bypass_actors: cdktn.listMapper(organizationRulesetBypassActorsToTerraform, true)(this._bypassActors.internalValue),
      conditions: organizationRulesetConditionsToTerraform(this._conditions.internalValue),
      rules: organizationRulesetRulesToTerraform(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enforcement: {
        value: cdktn.stringToHclTerraform(this._enforcement),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktn.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_actors: {
        value: cdktn.listMapperHcl(organizationRulesetBypassActorsToHclTerraform, true)(this._bypassActors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationRulesetBypassActorsList",
      },
      conditions: {
        value: organizationRulesetConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationRulesetConditionsList",
      },
      rules: {
        value: organizationRulesetRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationRulesetRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
