# `dataGithubReleaseAsset` Submodule <a name="`dataGithubReleaseAsset` Submodule" id="@cdktn/provider-github.dataGithubReleaseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubReleaseAsset <a name="DataGithubReleaseAsset" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset github_release_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer"></a>

```java
import io.cdktn.providers.github.data_github_release_asset.DataGithubReleaseAsset;

DataGithubReleaseAsset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetId(java.lang.Number)
    .owner(java.lang.String)
    .repository(java.lang.String)
//  .downloadFileContents(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.assetId">assetId</a></code> | <code>java.lang.Number</code> | ID of the release asset to retrieve. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Owner of the repository. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Name of the repository to retrieve the release asset from. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.downloadFileContents">downloadFileContents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to download the asset file content into the `file_contents` attribute. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.assetId"></a>

- *Type:* java.lang.Number

ID of the release asset to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#asset_id DataGithubReleaseAsset#asset_id}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Owner of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#owner DataGithubReleaseAsset#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Name of the repository to retrieve the release asset from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#repository DataGithubReleaseAsset#repository}

---

##### `downloadFileContents`<sup>Optional</sup> <a name="downloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.downloadFileContents"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to download the asset file content into the `file_contents` attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#download_file_contents DataGithubReleaseAsset#download_file_contents}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.with">with</a></code> | Applies one or more mixins to this construct. |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDownloadFileContents` <a name="resetDownloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetDownloadFileContents"></a>

```java
public void resetDownloadFileContents()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubReleaseAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct"></a>

```java
import io.cdktn.providers.github.data_github_release_asset.DataGithubReleaseAsset;

DataGithubReleaseAsset.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement"></a>

```java
import io.cdktn.providers.github.data_github_release_asset.DataGithubReleaseAsset;

DataGithubReleaseAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource"></a>

```java
import io.cdktn.providers.github.data_github_release_asset.DataGithubReleaseAsset;

DataGithubReleaseAsset.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.data_github_release_asset.DataGithubReleaseAsset;

DataGithubReleaseAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGithubReleaseAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGithubReleaseAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGithubReleaseAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGithubReleaseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubReleaseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl">browserDownloadUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents">fileContents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput">assetIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput">downloadFileContentsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId">assetId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents">downloadFileContents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `browserDownloadUrl`<sup>Required</sup> <a name="browserDownloadUrl" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl"></a>

```java
public java.lang.String getBrowserDownloadUrl();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `fileContents`<sup>Required</sup> <a name="fileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents"></a>

```java
public java.lang.String getFileContents();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput"></a>

```java
public java.lang.Number getAssetIdInput();
```

- *Type:* java.lang.Number

---

##### `downloadFileContentsInput`<sup>Optional</sup> <a name="downloadFileContentsInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput"></a>

```java
public java.lang.Boolean|IResolvable getDownloadFileContentsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId"></a>

```java
public java.lang.Number getAssetId();
```

- *Type:* java.lang.Number

---

##### `downloadFileContents`<sup>Required</sup> <a name="downloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents"></a>

```java
public java.lang.Boolean|IResolvable getDownloadFileContents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubReleaseAssetConfig <a name="DataGithubReleaseAssetConfig" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.Initializer"></a>

```java
import io.cdktn.providers.github.data_github_release_asset.DataGithubReleaseAssetConfig;

DataGithubReleaseAssetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetId(java.lang.Number)
    .owner(java.lang.String)
    .repository(java.lang.String)
//  .downloadFileContents(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId">assetId</a></code> | <code>java.lang.Number</code> | ID of the release asset to retrieve. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Owner of the repository. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Name of the repository to retrieve the release asset from. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents">downloadFileContents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to download the asset file content into the `file_contents` attribute. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId"></a>

```java
public java.lang.Number getAssetId();
```

- *Type:* java.lang.Number

ID of the release asset to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#asset_id DataGithubReleaseAsset#asset_id}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Owner of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#owner DataGithubReleaseAsset#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Name of the repository to retrieve the release asset from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#repository DataGithubReleaseAsset#repository}

---

##### `downloadFileContents`<sup>Optional</sup> <a name="downloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents"></a>

```java
public java.lang.Boolean|IResolvable getDownloadFileContents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to download the asset file content into the `file_contents` attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#download_file_contents DataGithubReleaseAsset#download_file_contents}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



