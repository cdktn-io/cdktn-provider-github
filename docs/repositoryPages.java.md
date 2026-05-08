# `repositoryPages` Submodule <a name="`repositoryPages` Submodule" id="@cdktn/provider-github.repositoryPages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPagesA <a name="RepositoryPagesA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages github_repository_pages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer"></a>

```java
import io.cdktn.providers.github.repository_pages.RepositoryPagesA;

RepositoryPagesA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repository(java.lang.String)
//  .buildType(java.lang.String)
//  .cname(java.lang.String)
//  .httpsEnforced(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .public(java.lang.Boolean|IResolvable)
//  .source(RepositoryPagesSourceA)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The repository name to configure GitHub Pages for. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.buildType">buildType</a></code> | <code>java.lang.String</code> | The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.cname">cname</a></code> | <code>java.lang.String</code> | The custom domain for the repository. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.httpsEnforced">httpsEnforced</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#id RepositoryPagesA#id}. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.public">public</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the GitHub Pages site is publicly visible. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | source block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The repository name to configure GitHub Pages for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#repository RepositoryPagesA#repository}

---

##### `buildType`<sup>Optional</sup> <a name="buildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.buildType"></a>

- *Type:* java.lang.String

The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#build_type RepositoryPagesA#build_type}

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.cname"></a>

- *Type:* java.lang.String

The custom domain for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#cname RepositoryPagesA#cname}

---

##### `httpsEnforced`<sup>Optional</sup> <a name="httpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.httpsEnforced"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#https_enforced RepositoryPagesA#https_enforced}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#id RepositoryPagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.public"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the GitHub Pages site is publicly visible.

If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#public RepositoryPagesA#public}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#source RepositoryPagesA#source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType">resetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname">resetCname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced">resetHttpsEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic">resetPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource"></a>

```java
public void putSource(RepositoryPagesSourceA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---

##### `resetBuildType` <a name="resetBuildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType"></a>

```java
public void resetBuildType()
```

##### `resetCname` <a name="resetCname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname"></a>

```java
public void resetCname()
```

##### `resetHttpsEnforced` <a name="resetHttpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced"></a>

```java
public void resetHttpsEnforced()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId"></a>

```java
public void resetId()
```

##### `resetPublic` <a name="resetPublic" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic"></a>

```java
public void resetPublic()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource"></a>

```java
public void resetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct"></a>

```java
import io.cdktn.providers.github.repository_pages.RepositoryPagesA;

RepositoryPagesA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement"></a>

```java
import io.cdktn.providers.github.repository_pages.RepositoryPagesA;

RepositoryPagesA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource"></a>

```java
import io.cdktn.providers.github.repository_pages.RepositoryPagesA;

RepositoryPagesA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.repository_pages.RepositoryPagesA;

RepositoryPagesA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RepositoryPagesA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RepositoryPagesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RepositoryPagesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryPagesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus">buildStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404">custom404</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl">htmlUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId">repositoryId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source">source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput">buildTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput">cnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput">httpsEnforcedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput">publicInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType">buildType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname">cname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced">httpsEnforced</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public">public</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

---

##### `buildStatus`<sup>Required</sup> <a name="buildStatus" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus"></a>

```java
public java.lang.String getBuildStatus();
```

- *Type:* java.lang.String

---

##### `custom404`<sup>Required</sup> <a name="custom404" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404"></a>

```java
public IResolvable getCustom404();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl"></a>

```java
public java.lang.String getHtmlUrl();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId"></a>

```java
public java.lang.Number getRepositoryId();
```

- *Type:* java.lang.Number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source"></a>

```java
public RepositoryPagesSourceAOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a>

---

##### `buildTypeInput`<sup>Optional</sup> <a name="buildTypeInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput"></a>

```java
public java.lang.String getBuildTypeInput();
```

- *Type:* java.lang.String

---

##### `cnameInput`<sup>Optional</sup> <a name="cnameInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput"></a>

```java
public java.lang.String getCnameInput();
```

- *Type:* java.lang.String

---

##### `httpsEnforcedInput`<sup>Optional</sup> <a name="httpsEnforcedInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput"></a>

```java
public java.lang.Boolean|IResolvable getHttpsEnforcedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `publicInput`<sup>Optional</sup> <a name="publicInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput"></a>

```java
public RepositoryPagesSourceA getSourceInput();
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---

##### `buildType`<sup>Required</sup> <a name="buildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType"></a>

```java
public java.lang.String getBuildType();
```

- *Type:* java.lang.String

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

---

##### `httpsEnforced`<sup>Required</sup> <a name="httpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced"></a>

```java
public java.lang.Boolean|IResolvable getHttpsEnforced();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public"></a>

```java
public java.lang.Boolean|IResolvable getPublic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPagesAConfig <a name="RepositoryPagesAConfig" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.Initializer"></a>

```java
import io.cdktn.providers.github.repository_pages.RepositoryPagesAConfig;

RepositoryPagesAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repository(java.lang.String)
//  .buildType(java.lang.String)
//  .cname(java.lang.String)
//  .httpsEnforced(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .public(java.lang.Boolean|IResolvable)
//  .source(RepositoryPagesSourceA)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The repository name to configure GitHub Pages for. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType">buildType</a></code> | <code>java.lang.String</code> | The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname">cname</a></code> | <code>java.lang.String</code> | The custom domain for the repository. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced">httpsEnforced</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#id RepositoryPagesA#id}. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public">public</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the GitHub Pages site is publicly visible. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The repository name to configure GitHub Pages for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#repository RepositoryPagesA#repository}

---

##### `buildType`<sup>Optional</sup> <a name="buildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType"></a>

```java
public java.lang.String getBuildType();
```

- *Type:* java.lang.String

The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#build_type RepositoryPagesA#build_type}

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname"></a>

```java
public java.lang.String getCname();
```

- *Type:* java.lang.String

The custom domain for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#cname RepositoryPagesA#cname}

---

##### `httpsEnforced`<sup>Optional</sup> <a name="httpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced"></a>

```java
public java.lang.Boolean|IResolvable getHttpsEnforced();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#https_enforced RepositoryPagesA#https_enforced}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#id RepositoryPagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public"></a>

```java
public java.lang.Boolean|IResolvable getPublic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the GitHub Pages site is publicly visible.

If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#public RepositoryPagesA#public}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source"></a>

```java
public RepositoryPagesSourceA getSource();
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#source RepositoryPagesA#source}

---

### RepositoryPagesSourceA <a name="RepositoryPagesSourceA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.Initializer"></a>

```java
import io.cdktn.providers.github.repository_pages.RepositoryPagesSourceA;

RepositoryPagesSourceA.builder()
    .branch(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch">branch</a></code> | <code>java.lang.String</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path">path</a></code> | <code>java.lang.String</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#branch RepositoryPagesA#branch}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#path RepositoryPagesA#path}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesSourceAOutputReference <a name="RepositoryPagesSourceAOutputReference" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.github.repository_pages.RepositoryPagesSourceAOutputReference;

new RepositoryPagesSourceAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue"></a>

```java
public RepositoryPagesSourceA getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---



