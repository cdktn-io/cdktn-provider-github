# `dataGithubReleaseAsset` Submodule <a name="`dataGithubReleaseAsset` Submodule" id="@cdktn/provider-github.dataGithubReleaseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubReleaseAsset <a name="DataGithubReleaseAsset" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset github_release_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer"></a>

```typescript
import { dataGithubReleaseAsset } from '@cdktn/provider-github'

new dataGithubReleaseAsset.DataGithubReleaseAsset(scope: Construct, id: string, config: DataGithubReleaseAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig">DataGithubReleaseAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig">DataGithubReleaseAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetDownloadFileContents">resetDownloadFileContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDownloadFileContents` <a name="resetDownloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetDownloadFileContents"></a>

```typescript
public resetDownloadFileContents(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubReleaseAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct"></a>

```typescript
import { dataGithubReleaseAsset } from '@cdktn/provider-github'

dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement"></a>

```typescript
import { dataGithubReleaseAsset } from '@cdktn/provider-github'

dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource"></a>

```typescript
import { dataGithubReleaseAsset } from '@cdktn/provider-github'

dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport"></a>

```typescript
import { dataGithubReleaseAsset } from '@cdktn/provider-github'

dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubReleaseAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubReleaseAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubReleaseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubReleaseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl">browserDownloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents">fileContents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput">assetIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput">downloadFileContentsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId">assetId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents">downloadFileContents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `browserDownloadUrl`<sup>Required</sup> <a name="browserDownloadUrl" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl"></a>

```typescript
public readonly browserDownloadUrl: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `fileContents`<sup>Required</sup> <a name="fileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents"></a>

```typescript
public readonly fileContents: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput"></a>

```typescript
public readonly assetIdInput: number;
```

- *Type:* number

---

##### `downloadFileContentsInput`<sup>Optional</sup> <a name="downloadFileContentsInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput"></a>

```typescript
public readonly downloadFileContentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId"></a>

```typescript
public readonly assetId: number;
```

- *Type:* number

---

##### `downloadFileContents`<sup>Required</sup> <a name="downloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents"></a>

```typescript
public readonly downloadFileContents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubReleaseAssetConfig <a name="DataGithubReleaseAssetConfig" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.Initializer"></a>

```typescript
import { dataGithubReleaseAsset } from '@cdktn/provider-github'

const dataGithubReleaseAssetConfig: dataGithubReleaseAsset.DataGithubReleaseAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId">assetId</a></code> | <code>number</code> | ID of the release asset to retrieve. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner">owner</a></code> | <code>string</code> | Owner of the repository. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository">repository</a></code> | <code>string</code> | Name of the repository to retrieve the release asset from. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents">downloadFileContents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to download the asset file content into the `file_contents` attribute. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId"></a>

```typescript
public readonly assetId: number;
```

- *Type:* number

ID of the release asset to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#asset_id DataGithubReleaseAsset#asset_id}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Owner of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#owner DataGithubReleaseAsset#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Name of the repository to retrieve the release asset from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#repository DataGithubReleaseAsset#repository}

---

##### `downloadFileContents`<sup>Optional</sup> <a name="downloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents"></a>

```typescript
public readonly downloadFileContents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to download the asset file content into the `file_contents` attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#download_file_contents DataGithubReleaseAsset#download_file_contents}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



