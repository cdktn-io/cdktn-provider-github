# `dataGithubOrganizationSecurityManagers` Submodule <a name="`dataGithubOrganizationSecurityManagers` Submodule" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationSecurityManagers <a name="DataGithubOrganizationSecurityManagers" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/organization_security_managers github_organization_security_managers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.Initializer"></a>

```typescript
import { dataGithubOrganizationSecurityManagers } from '@cdktn/provider-github'

new dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers(scope: Construct, id: string, config?: DataGithubOrganizationSecurityManagersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig">DataGithubOrganizationSecurityManagersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig">DataGithubOrganizationSecurityManagersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubOrganizationSecurityManagers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isConstruct"></a>

```typescript
import { dataGithubOrganizationSecurityManagers } from '@cdktn/provider-github'

dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isTerraformElement"></a>

```typescript
import { dataGithubOrganizationSecurityManagers } from '@cdktn/provider-github'

dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isTerraformDataSource"></a>

```typescript
import { dataGithubOrganizationSecurityManagers } from '@cdktn/provider-github'

dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.generateConfigForImport"></a>

```typescript
import { dataGithubOrganizationSecurityManagers } from '@cdktn/provider-github'

dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubOrganizationSecurityManagers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganizationSecurityManagers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganizationSecurityManagers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/organization_security_managers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationSecurityManagers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.teams">teams</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList">DataGithubOrganizationSecurityManagersTeamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.teams"></a>

```typescript
public readonly teams: DataGithubOrganizationSecurityManagersTeamsList;
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList">DataGithubOrganizationSecurityManagersTeamsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationSecurityManagersConfig <a name="DataGithubOrganizationSecurityManagersConfig" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.Initializer"></a>

```typescript
import { dataGithubOrganizationSecurityManagers } from '@cdktn/provider-github'

const dataGithubOrganizationSecurityManagersConfig: dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/organization_security_managers#id DataGithubOrganizationSecurityManagers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/data-sources/organization_security_managers#id DataGithubOrganizationSecurityManagers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationSecurityManagersTeams <a name="DataGithubOrganizationSecurityManagersTeams" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeams.Initializer"></a>

```typescript
import { dataGithubOrganizationSecurityManagers } from '@cdktn/provider-github'

const dataGithubOrganizationSecurityManagersTeams: dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeams = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationSecurityManagersTeamsList <a name="DataGithubOrganizationSecurityManagersTeamsList" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.Initializer"></a>

```typescript
import { dataGithubOrganizationSecurityManagers } from '@cdktn/provider-github'

new dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.get"></a>

```typescript
public get(index: number): DataGithubOrganizationSecurityManagersTeamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubOrganizationSecurityManagersTeamsOutputReference <a name="DataGithubOrganizationSecurityManagersTeamsOutputReference" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.Initializer"></a>

```typescript
import { dataGithubOrganizationSecurityManagers } from '@cdktn/provider-github'

new dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeams">DataGithubOrganizationSecurityManagersTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubOrganizationSecurityManagersTeams;
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationSecurityManagers.DataGithubOrganizationSecurityManagersTeams">DataGithubOrganizationSecurityManagersTeams</a>

---



