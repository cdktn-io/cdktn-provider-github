# `repositoryAutolinkReference` Submodule <a name="`repositoryAutolinkReference` Submodule" id="@cdktn/provider-github.repositoryAutolinkReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryAutolinkReference <a name="RepositoryAutolinkReference" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference github_repository_autolink_reference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer"></a>

```java
import io.cdktn.providers.github.repository_autolink_reference.RepositoryAutolinkReference;

RepositoryAutolinkReference.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyPrefix(java.lang.String)
    .repository(java.lang.String)
    .targetUrlTemplate(java.lang.String)
//  .id(java.lang.String)
//  .isAlphanumeric(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The repository name. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.targetUrlTemplate">targetUrlTemplate</a></code> | <code>java.lang.String</code> | The template of the target URL used for the links; |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.isAlphanumeric">isAlphanumeric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.keyPrefix"></a>

- *Type:* java.lang.String

This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#key_prefix RepositoryAutolinkReference#key_prefix}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#repository RepositoryAutolinkReference#repository}

---

##### `targetUrlTemplate`<sup>Required</sup> <a name="targetUrlTemplate" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.targetUrlTemplate"></a>

- *Type:* java.lang.String

The template of the target URL used for the links;

must be a valid URL and contain `<num>` for the reference number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#target_url_template RepositoryAutolinkReference#target_url_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAlphanumeric`<sup>Optional</sup> <a name="isAlphanumeric" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.isAlphanumeric"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#is_alphanumeric RepositoryAutolinkReference#is_alphanumeric}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetIsAlphanumeric">resetIsAlphanumeric</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetId"></a>

```java
public void resetId()
```

##### `resetIsAlphanumeric` <a name="resetIsAlphanumeric" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetIsAlphanumeric"></a>

```java
public void resetIsAlphanumeric()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RepositoryAutolinkReference resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct"></a>

```java
import io.cdktn.providers.github.repository_autolink_reference.RepositoryAutolinkReference;

RepositoryAutolinkReference.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement"></a>

```java
import io.cdktn.providers.github.repository_autolink_reference.RepositoryAutolinkReference;

RepositoryAutolinkReference.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource"></a>

```java
import io.cdktn.providers.github.repository_autolink_reference.RepositoryAutolinkReference;

RepositoryAutolinkReference.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.repository_autolink_reference.RepositoryAutolinkReference;

RepositoryAutolinkReference.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RepositoryAutolinkReference.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RepositoryAutolinkReference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RepositoryAutolinkReference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RepositoryAutolinkReference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryAutolinkReference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumericInput">isAlphanumericInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplateInput">targetUrlTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumeric">isAlphanumeric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplate">targetUrlTemplate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAlphanumericInput`<sup>Optional</sup> <a name="isAlphanumericInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumericInput"></a>

```java
public java.lang.Boolean|IResolvable getIsAlphanumericInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefixInput"></a>

```java
public java.lang.String getKeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `targetUrlTemplateInput`<sup>Optional</sup> <a name="targetUrlTemplateInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplateInput"></a>

```java
public java.lang.String getTargetUrlTemplateInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAlphanumeric`<sup>Required</sup> <a name="isAlphanumeric" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumeric"></a>

```java
public java.lang.Boolean|IResolvable getIsAlphanumeric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `targetUrlTemplate`<sup>Required</sup> <a name="targetUrlTemplate" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplate"></a>

```java
public java.lang.String getTargetUrlTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryAutolinkReferenceConfig <a name="RepositoryAutolinkReferenceConfig" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.Initializer"></a>

```java
import io.cdktn.providers.github.repository_autolink_reference.RepositoryAutolinkReferenceConfig;

RepositoryAutolinkReferenceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyPrefix(java.lang.String)
    .repository(java.lang.String)
    .targetUrlTemplate(java.lang.String)
//  .id(java.lang.String)
//  .isAlphanumeric(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The repository name. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.targetUrlTemplate">targetUrlTemplate</a></code> | <code>java.lang.String</code> | The template of the target URL used for the links; |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.isAlphanumeric">isAlphanumeric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#key_prefix RepositoryAutolinkReference#key_prefix}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#repository RepositoryAutolinkReference#repository}

---

##### `targetUrlTemplate`<sup>Required</sup> <a name="targetUrlTemplate" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.targetUrlTemplate"></a>

```java
public java.lang.String getTargetUrlTemplate();
```

- *Type:* java.lang.String

The template of the target URL used for the links;

must be a valid URL and contain `<num>` for the reference number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#target_url_template RepositoryAutolinkReference#target_url_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAlphanumeric`<sup>Optional</sup> <a name="isAlphanumeric" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.isAlphanumeric"></a>

```java
public java.lang.Boolean|IResolvable getIsAlphanumeric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_autolink_reference#is_alphanumeric RepositoryAutolinkReference#is_alphanumeric}

---



