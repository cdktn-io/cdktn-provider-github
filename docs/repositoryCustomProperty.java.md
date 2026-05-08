# `repositoryCustomProperty` Submodule <a name="`repositoryCustomProperty` Submodule" id="@cdktn/provider-github.repositoryCustomProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryCustomProperty <a name="RepositoryCustomProperty" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property github_repository_custom_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer"></a>

```java
import io.cdktn.providers.github.repository_custom_property.RepositoryCustomProperty;

RepositoryCustomProperty.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .propertyName(java.lang.String)
    .propertyType(java.lang.String)
    .propertyValue(java.util.List<java.lang.String>)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.propertyName">propertyName</a></code> | <code>java.lang.String</code> | Name of the custom property. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.propertyType">propertyType</a></code> | <code>java.lang.String</code> | Type of the custom property. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.propertyValue">propertyValue</a></code> | <code>java.util.List<java.lang.String></code> | Value of the custom property. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Name of the repository which the custom properties should be on. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#id RepositoryCustomProperty#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.propertyName"></a>

- *Type:* java.lang.String

Name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#property_name RepositoryCustomProperty#property_name}

---

##### `propertyType`<sup>Required</sup> <a name="propertyType" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.propertyType"></a>

- *Type:* java.lang.String

Type of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#property_type RepositoryCustomProperty#property_type}

---

##### `propertyValue`<sup>Required</sup> <a name="propertyValue" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.propertyValue"></a>

- *Type:* java.util.List<java.lang.String>

Value of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#property_value RepositoryCustomProperty#property_value}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Name of the repository which the custom properties should be on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#repository RepositoryCustomProperty#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#id RepositoryCustomProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RepositoryCustomProperty resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isConstruct"></a>

```java
import io.cdktn.providers.github.repository_custom_property.RepositoryCustomProperty;

RepositoryCustomProperty.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformElement"></a>

```java
import io.cdktn.providers.github.repository_custom_property.RepositoryCustomProperty;

RepositoryCustomProperty.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformResource"></a>

```java
import io.cdktn.providers.github.repository_custom_property.RepositoryCustomProperty;

RepositoryCustomProperty.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.repository_custom_property.RepositoryCustomProperty;

RepositoryCustomProperty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RepositoryCustomProperty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RepositoryCustomProperty resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RepositoryCustomProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RepositoryCustomProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryCustomProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyNameInput">propertyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyTypeInput">propertyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyValueInput">propertyValueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyName">propertyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyType">propertyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyValue">propertyValue</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `propertyNameInput`<sup>Optional</sup> <a name="propertyNameInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyNameInput"></a>

```java
public java.lang.String getPropertyNameInput();
```

- *Type:* java.lang.String

---

##### `propertyTypeInput`<sup>Optional</sup> <a name="propertyTypeInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyTypeInput"></a>

```java
public java.lang.String getPropertyTypeInput();
```

- *Type:* java.lang.String

---

##### `propertyValueInput`<sup>Optional</sup> <a name="propertyValueInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyValueInput"></a>

```java
public java.util.List<java.lang.String> getPropertyValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyName"></a>

```java
public java.lang.String getPropertyName();
```

- *Type:* java.lang.String

---

##### `propertyType`<sup>Required</sup> <a name="propertyType" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyType"></a>

```java
public java.lang.String getPropertyType();
```

- *Type:* java.lang.String

---

##### `propertyValue`<sup>Required</sup> <a name="propertyValue" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyValue"></a>

```java
public java.util.List<java.lang.String> getPropertyValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryCustomPropertyConfig <a name="RepositoryCustomPropertyConfig" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.Initializer"></a>

```java
import io.cdktn.providers.github.repository_custom_property.RepositoryCustomPropertyConfig;

RepositoryCustomPropertyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .propertyName(java.lang.String)
    .propertyType(java.lang.String)
    .propertyValue(java.util.List<java.lang.String>)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyName">propertyName</a></code> | <code>java.lang.String</code> | Name of the custom property. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyType">propertyType</a></code> | <code>java.lang.String</code> | Type of the custom property. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyValue">propertyValue</a></code> | <code>java.util.List<java.lang.String></code> | Value of the custom property. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Name of the repository which the custom properties should be on. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#id RepositoryCustomProperty#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyName"></a>

```java
public java.lang.String getPropertyName();
```

- *Type:* java.lang.String

Name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#property_name RepositoryCustomProperty#property_name}

---

##### `propertyType`<sup>Required</sup> <a name="propertyType" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyType"></a>

```java
public java.lang.String getPropertyType();
```

- *Type:* java.lang.String

Type of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#property_type RepositoryCustomProperty#property_type}

---

##### `propertyValue`<sup>Required</sup> <a name="propertyValue" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyValue"></a>

```java
public java.util.List<java.lang.String> getPropertyValue();
```

- *Type:* java.util.List<java.lang.String>

Value of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#property_value RepositoryCustomProperty#property_value}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Name of the repository which the custom properties should be on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#repository RepositoryCustomProperty#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#id RepositoryCustomProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



