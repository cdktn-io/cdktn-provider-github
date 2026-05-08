# `dataGithubOrganization` Submodule <a name="`dataGithubOrganization` Submodule" id="@cdktn/provider-github.dataGithubOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganization <a name="DataGithubOrganization" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization github_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer"></a>

```java
import io.cdktn.providers.github.data_github_organization.DataGithubOrganization;

DataGithubOrganization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .ignoreArchivedRepos(java.lang.Boolean|IResolvable)
//  .summaryOnly(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#name DataGithubOrganization#name}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#id DataGithubOrganization#id}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.ignoreArchivedRepos">ignoreArchivedRepos</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#ignore_archived_repos DataGithubOrganization#ignore_archived_repos}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.summaryOnly">summaryOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#summary_only DataGithubOrganization#summary_only}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#name DataGithubOrganization#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#id DataGithubOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreArchivedRepos`<sup>Optional</sup> <a name="ignoreArchivedRepos" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.ignoreArchivedRepos"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#ignore_archived_repos DataGithubOrganization#ignore_archived_repos}.

---

##### `summaryOnly`<sup>Optional</sup> <a name="summaryOnly" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.summaryOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#summary_only DataGithubOrganization#summary_only}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetIgnoreArchivedRepos">resetIgnoreArchivedRepos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetSummaryOnly">resetSummaryOnly</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreArchivedRepos` <a name="resetIgnoreArchivedRepos" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetIgnoreArchivedRepos"></a>

```java
public void resetIgnoreArchivedRepos()
```

##### `resetSummaryOnly` <a name="resetSummaryOnly" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetSummaryOnly"></a>

```java
public void resetSummaryOnly()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isConstruct"></a>

```java
import io.cdktn.providers.github.data_github_organization.DataGithubOrganization;

DataGithubOrganization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformElement"></a>

```java
import io.cdktn.providers.github.data_github_organization.DataGithubOrganization;

DataGithubOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformDataSource"></a>

```java
import io.cdktn.providers.github.data_github_organization.DataGithubOrganization;

DataGithubOrganization.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.data_github_organization.DataGithubOrganization;

DataGithubOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGithubOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGithubOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGithubOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGithubOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.advancedSecurityEnabledForNewRepositories">advancedSecurityEnabledForNewRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.defaultRepositoryPermission">defaultRepositoryPermission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotAlertsEnabledForNewRepositories">dependabotAlertsEnabledForNewRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotSecurityUpdatesEnabledForNewRepositories">dependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependencyGraphEnabledForNewRepositories">dependencyGraphEnabledForNewRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.login">login</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersAllowedRepositoryCreationType">membersAllowedRepositoryCreationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateInternalRepositories">membersCanCreateInternalRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePages">membersCanCreatePages</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivatePages">membersCanCreatePrivatePages</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivateRepositories">membersCanCreatePrivateRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicPages">membersCanCreatePublicPages</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicRepositories">membersCanCreatePublicRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateRepositories">membersCanCreateRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanForkPrivateRepositories">membersCanForkPrivateRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.orgname">orgname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.repositories">repositories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningEnabledForNewRepositories">secretScanningEnabledForNewRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningPushProtectionEnabledForNewRepositories">secretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.twoFactorRequirementEnabled">twoFactorRequirementEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.users">users</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.webCommitSignoffRequired">webCommitSignoffRequired</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedReposInput">ignoreArchivedReposInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnlyInput">summaryOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedRepos">ignoreArchivedRepos</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnly">summaryOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `advancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="advancedSecurityEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.advancedSecurityEnabledForNewRepositories"></a>

```java
public IResolvable getAdvancedSecurityEnabledForNewRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `defaultRepositoryPermission`<sup>Required</sup> <a name="defaultRepositoryPermission" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.defaultRepositoryPermission"></a>

```java
public java.lang.String getDefaultRepositoryPermission();
```

- *Type:* java.lang.String

---

##### `dependabotAlertsEnabledForNewRepositories`<sup>Required</sup> <a name="dependabotAlertsEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotAlertsEnabledForNewRepositories"></a>

```java
public IResolvable getDependabotAlertsEnabledForNewRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dependabotSecurityUpdatesEnabledForNewRepositories`<sup>Required</sup> <a name="dependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```java
public IResolvable getDependabotSecurityUpdatesEnabledForNewRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dependencyGraphEnabledForNewRepositories`<sup>Required</sup> <a name="dependencyGraphEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependencyGraphEnabledForNewRepositories"></a>

```java
public IResolvable getDependencyGraphEnabledForNewRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `membersAllowedRepositoryCreationType`<sup>Required</sup> <a name="membersAllowedRepositoryCreationType" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersAllowedRepositoryCreationType"></a>

```java
public java.lang.String getMembersAllowedRepositoryCreationType();
```

- *Type:* java.lang.String

---

##### `membersCanCreateInternalRepositories`<sup>Required</sup> <a name="membersCanCreateInternalRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateInternalRepositories"></a>

```java
public IResolvable getMembersCanCreateInternalRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `membersCanCreatePages`<sup>Required</sup> <a name="membersCanCreatePages" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePages"></a>

```java
public IResolvable getMembersCanCreatePages();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `membersCanCreatePrivatePages`<sup>Required</sup> <a name="membersCanCreatePrivatePages" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivatePages"></a>

```java
public IResolvable getMembersCanCreatePrivatePages();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `membersCanCreatePrivateRepositories`<sup>Required</sup> <a name="membersCanCreatePrivateRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivateRepositories"></a>

```java
public IResolvable getMembersCanCreatePrivateRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `membersCanCreatePublicPages`<sup>Required</sup> <a name="membersCanCreatePublicPages" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicPages"></a>

```java
public IResolvable getMembersCanCreatePublicPages();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `membersCanCreatePublicRepositories`<sup>Required</sup> <a name="membersCanCreatePublicRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicRepositories"></a>

```java
public IResolvable getMembersCanCreatePublicRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `membersCanCreateRepositories`<sup>Required</sup> <a name="membersCanCreateRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateRepositories"></a>

```java
public IResolvable getMembersCanCreateRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `membersCanForkPrivateRepositories`<sup>Required</sup> <a name="membersCanForkPrivateRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanForkPrivateRepositories"></a>

```java
public IResolvable getMembersCanForkPrivateRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `orgname`<sup>Required</sup> <a name="orgname" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.orgname"></a>

```java
public java.lang.String getOrgname();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.repositories"></a>

```java
public java.util.List<java.lang.String> getRepositories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="secretScanningEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningEnabledForNewRepositories"></a>

```java
public IResolvable getSecretScanningEnabledForNewRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `secretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="secretScanningPushProtectionEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```java
public IResolvable getSecretScanningPushProtectionEnabledForNewRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `twoFactorRequirementEnabled`<sup>Required</sup> <a name="twoFactorRequirementEnabled" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.twoFactorRequirementEnabled"></a>

```java
public IResolvable getTwoFactorRequirementEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.users"></a>

```java
public StringMapList getUsers();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `webCommitSignoffRequired`<sup>Required</sup> <a name="webCommitSignoffRequired" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.webCommitSignoffRequired"></a>

```java
public IResolvable getWebCommitSignoffRequired();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreArchivedReposInput`<sup>Optional</sup> <a name="ignoreArchivedReposInput" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedReposInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreArchivedReposInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `summaryOnlyInput`<sup>Optional</sup> <a name="summaryOnlyInput" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getSummaryOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreArchivedRepos`<sup>Required</sup> <a name="ignoreArchivedRepos" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedRepos"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreArchivedRepos();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `summaryOnly`<sup>Required</sup> <a name="summaryOnly" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnly"></a>

```java
public java.lang.Boolean|IResolvable getSummaryOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationConfig <a name="DataGithubOrganizationConfig" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.Initializer"></a>

```java
import io.cdktn.providers.github.data_github_organization.DataGithubOrganizationConfig;

DataGithubOrganizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .ignoreArchivedRepos(java.lang.Boolean|IResolvable)
//  .summaryOnly(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#name DataGithubOrganization#name}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#id DataGithubOrganization#id}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.ignoreArchivedRepos">ignoreArchivedRepos</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#ignore_archived_repos DataGithubOrganization#ignore_archived_repos}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.summaryOnly">summaryOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#summary_only DataGithubOrganization#summary_only}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#name DataGithubOrganization#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#id DataGithubOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreArchivedRepos`<sup>Optional</sup> <a name="ignoreArchivedRepos" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.ignoreArchivedRepos"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreArchivedRepos();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#ignore_archived_repos DataGithubOrganization#ignore_archived_repos}.

---

##### `summaryOnly`<sup>Optional</sup> <a name="summaryOnly" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.summaryOnly"></a>

```java
public java.lang.Boolean|IResolvable getSummaryOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#summary_only DataGithubOrganization#summary_only}.

---



