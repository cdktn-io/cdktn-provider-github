# `dataGithubOrganizationAppInstallations` Submodule <a name="`dataGithubOrganizationAppInstallations` Submodule" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationAppInstallations <a name="DataGithubOrganizationAppInstallations" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations github_organization_app_installations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer"></a>

```typescript
import { dataGithubOrganizationAppInstallations } from '@cdktn/provider-github'

new dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations(scope: Construct, id: string, config?: DataGithubOrganizationAppInstallationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig">DataGithubOrganizationAppInstallationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig">DataGithubOrganizationAppInstallationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubOrganizationAppInstallations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct"></a>

```typescript
import { dataGithubOrganizationAppInstallations } from '@cdktn/provider-github'

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement"></a>

```typescript
import { dataGithubOrganizationAppInstallations } from '@cdktn/provider-github'

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource"></a>

```typescript
import { dataGithubOrganizationAppInstallations } from '@cdktn/provider-github'

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport"></a>

```typescript
import { dataGithubOrganizationAppInstallations } from '@cdktn/provider-github'

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGithubOrganizationAppInstallations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganizationAppInstallations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganizationAppInstallations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationAppInstallations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.installations">installations</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList">DataGithubOrganizationAppInstallationsInstallationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `installations`<sup>Required</sup> <a name="installations" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.installations"></a>

```typescript
public readonly installations: DataGithubOrganizationAppInstallationsInstallationsList;
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList">DataGithubOrganizationAppInstallationsInstallationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationAppInstallationsConfig <a name="DataGithubOrganizationAppInstallationsConfig" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.Initializer"></a>

```typescript
import { dataGithubOrganizationAppInstallations } from '@cdktn/provider-github'

const dataGithubOrganizationAppInstallationsConfig: dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations#id DataGithubOrganizationAppInstallations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations#id DataGithubOrganizationAppInstallations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationAppInstallationsInstallations <a name="DataGithubOrganizationAppInstallationsInstallations" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations.Initializer"></a>

```typescript
import { dataGithubOrganizationAppInstallations } from '@cdktn/provider-github'

const dataGithubOrganizationAppInstallationsInstallations: dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationAppInstallationsInstallationsList <a name="DataGithubOrganizationAppInstallationsInstallationsList" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer"></a>

```typescript
import { dataGithubOrganizationAppInstallations } from '@cdktn/provider-github'

new dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.get"></a>

```typescript
public get(index: number): DataGithubOrganizationAppInstallationsInstallationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubOrganizationAppInstallationsInstallationsOutputReference <a name="DataGithubOrganizationAppInstallationsInstallationsOutputReference" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer"></a>

```typescript
import { dataGithubOrganizationAppInstallations } from '@cdktn/provider-github'

new dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appId">appId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appSlug">appSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.permissions">permissions</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.repositorySelection">repositorySelection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.singleFilePaths">singleFilePaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.suspended">suspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetId">targetId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations">DataGithubOrganizationAppInstallationsInstallations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appId"></a>

```typescript
public readonly appId: number;
```

- *Type:* number

---

##### `appSlug`<sup>Required</sup> <a name="appSlug" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appSlug"></a>

```typescript
public readonly appSlug: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `repositorySelection`<sup>Required</sup> <a name="repositorySelection" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.repositorySelection"></a>

```typescript
public readonly repositorySelection: string;
```

- *Type:* string

---

##### `singleFilePaths`<sup>Required</sup> <a name="singleFilePaths" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.singleFilePaths"></a>

```typescript
public readonly singleFilePaths: string[];
```

- *Type:* string[]

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.suspended"></a>

```typescript
public readonly suspended: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: number;
```

- *Type:* number

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubOrganizationAppInstallationsInstallations;
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations">DataGithubOrganizationAppInstallationsInstallations</a>

---



