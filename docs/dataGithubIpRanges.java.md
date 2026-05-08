# `dataGithubIpRanges` Submodule <a name="`dataGithubIpRanges` Submodule" id="@cdktn/provider-github.dataGithubIpRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubIpRanges <a name="DataGithubIpRanges" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/ip_ranges github_ip_ranges}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer"></a>

```java
import io.cdktn.providers.github.data_github_ip_ranges.DataGithubIpRanges;

DataGithubIpRanges.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubIpRanges resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct"></a>

```java
import io.cdktn.providers.github.data_github_ip_ranges.DataGithubIpRanges;

DataGithubIpRanges.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement"></a>

```java
import io.cdktn.providers.github.data_github_ip_ranges.DataGithubIpRanges;

DataGithubIpRanges.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource"></a>

```java
import io.cdktn.providers.github.data_github_ip_ranges.DataGithubIpRanges;

DataGithubIpRanges.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.data_github_ip_ranges.DataGithubIpRanges;

DataGithubIpRanges.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGithubIpRanges.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGithubIpRanges resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGithubIpRanges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGithubIpRanges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubIpRanges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv4">actionsIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv6">actionsIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsMacos">actionsMacos</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsMacosIpv4">actionsMacosIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsMacosIpv6">actionsMacosIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.api">api</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv4">apiIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv6">apiIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabot">dependabot</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv4">dependabotIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv6">dependabotIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.git">git</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.githubEnterpriseImporter">githubEnterpriseImporter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.githubEnterpriseImporterIpv4">githubEnterpriseImporterIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.githubEnterpriseImporterIpv6">githubEnterpriseImporterIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv4">gitIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv6">gitIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooks">hooks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv4">hooksIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv6">hooksIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importer">importer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv4">importerIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv6">importerIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv4">packagesIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv6">packagesIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pages">pages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv4">pagesIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv6">pagesIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.web">web</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv4">webIpv4</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv6">webIpv6</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `actionsIpv4`<sup>Required</sup> <a name="actionsIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv4"></a>

```java
public java.util.List<java.lang.String> getActionsIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `actionsIpv6`<sup>Required</sup> <a name="actionsIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv6"></a>

```java
public java.util.List<java.lang.String> getActionsIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `actionsMacos`<sup>Required</sup> <a name="actionsMacos" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsMacos"></a>

```java
public java.util.List<java.lang.String> getActionsMacos();
```

- *Type:* java.util.List<java.lang.String>

---

##### `actionsMacosIpv4`<sup>Required</sup> <a name="actionsMacosIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsMacosIpv4"></a>

```java
public java.util.List<java.lang.String> getActionsMacosIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `actionsMacosIpv6`<sup>Required</sup> <a name="actionsMacosIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsMacosIpv6"></a>

```java
public java.util.List<java.lang.String> getActionsMacosIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.api"></a>

```java
public java.util.List<java.lang.String> getApi();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiIpv4`<sup>Required</sup> <a name="apiIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv4"></a>

```java
public java.util.List<java.lang.String> getApiIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiIpv6`<sup>Required</sup> <a name="apiIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv6"></a>

```java
public java.util.List<java.lang.String> getApiIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dependabot`<sup>Required</sup> <a name="dependabot" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabot"></a>

```java
public java.util.List<java.lang.String> getDependabot();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dependabotIpv4`<sup>Required</sup> <a name="dependabotIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv4"></a>

```java
public java.util.List<java.lang.String> getDependabotIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dependabotIpv6`<sup>Required</sup> <a name="dependabotIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv6"></a>

```java
public java.util.List<java.lang.String> getDependabotIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `git`<sup>Required</sup> <a name="git" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.git"></a>

```java
public java.util.List<java.lang.String> getGit();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubEnterpriseImporter`<sup>Required</sup> <a name="githubEnterpriseImporter" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.githubEnterpriseImporter"></a>

```java
public java.util.List<java.lang.String> getGithubEnterpriseImporter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubEnterpriseImporterIpv4`<sup>Required</sup> <a name="githubEnterpriseImporterIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.githubEnterpriseImporterIpv4"></a>

```java
public java.util.List<java.lang.String> getGithubEnterpriseImporterIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubEnterpriseImporterIpv6`<sup>Required</sup> <a name="githubEnterpriseImporterIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.githubEnterpriseImporterIpv6"></a>

```java
public java.util.List<java.lang.String> getGithubEnterpriseImporterIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gitIpv4`<sup>Required</sup> <a name="gitIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv4"></a>

```java
public java.util.List<java.lang.String> getGitIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gitIpv6`<sup>Required</sup> <a name="gitIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv6"></a>

```java
public java.util.List<java.lang.String> getGitIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooks"></a>

```java
public java.util.List<java.lang.String> getHooks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hooksIpv4`<sup>Required</sup> <a name="hooksIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv4"></a>

```java
public java.util.List<java.lang.String> getHooksIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hooksIpv6`<sup>Required</sup> <a name="hooksIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv6"></a>

```java
public java.util.List<java.lang.String> getHooksIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `importer`<sup>Required</sup> <a name="importer" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importer"></a>

```java
public java.util.List<java.lang.String> getImporter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `importerIpv4`<sup>Required</sup> <a name="importerIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv4"></a>

```java
public java.util.List<java.lang.String> getImporterIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `importerIpv6`<sup>Required</sup> <a name="importerIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv6"></a>

```java
public java.util.List<java.lang.String> getImporterIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packages"></a>

```java
public java.util.List<java.lang.String> getPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `packagesIpv4`<sup>Required</sup> <a name="packagesIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv4"></a>

```java
public java.util.List<java.lang.String> getPackagesIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `packagesIpv6`<sup>Required</sup> <a name="packagesIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv6"></a>

```java
public java.util.List<java.lang.String> getPackagesIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pages"></a>

```java
public java.util.List<java.lang.String> getPages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pagesIpv4`<sup>Required</sup> <a name="pagesIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv4"></a>

```java
public java.util.List<java.lang.String> getPagesIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pagesIpv6`<sup>Required</sup> <a name="pagesIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv6"></a>

```java
public java.util.List<java.lang.String> getPagesIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.web"></a>

```java
public java.util.List<java.lang.String> getWeb();
```

- *Type:* java.util.List<java.lang.String>

---

##### `webIpv4`<sup>Required</sup> <a name="webIpv4" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv4"></a>

```java
public java.util.List<java.lang.String> getWebIpv4();
```

- *Type:* java.util.List<java.lang.String>

---

##### `webIpv6`<sup>Required</sup> <a name="webIpv6" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv6"></a>

```java
public java.util.List<java.lang.String> getWebIpv6();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubIpRangesConfig <a name="DataGithubIpRangesConfig" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.Initializer"></a>

```java
import io.cdktn.providers.github.data_github_ip_ranges.DataGithubIpRangesConfig;

DataGithubIpRangesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



