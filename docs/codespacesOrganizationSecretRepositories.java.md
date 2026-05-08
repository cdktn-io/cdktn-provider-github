# `codespacesOrganizationSecretRepositories` Submodule <a name="`codespacesOrganizationSecretRepositories` Submodule" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodespacesOrganizationSecretRepositories <a name="CodespacesOrganizationSecretRepositories" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories github_codespaces_organization_secret_repositories}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer"></a>

```java
import io.cdktn.providers.github.codespaces_organization_secret_repositories.CodespacesOrganizationSecretRepositories;

CodespacesOrganizationSecretRepositories.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretName(java.lang.String)
    .selectedRepositoryIds(java.util.List<java.lang.Number>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the existing secret. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | An array of repository ids that can access the organization secret. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories#id CodespacesOrganizationSecretRepositories#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.secretName"></a>

- *Type:* java.lang.String

Name of the existing secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories#secret_name CodespacesOrganizationSecretRepositories#secret_name}

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.selectedRepositoryIds"></a>

- *Type:* java.util.List<java.lang.Number>

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories#selected_repository_ids CodespacesOrganizationSecretRepositories#selected_repository_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories#id CodespacesOrganizationSecretRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodespacesOrganizationSecretRepositories resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct"></a>

```java
import io.cdktn.providers.github.codespaces_organization_secret_repositories.CodespacesOrganizationSecretRepositories;

CodespacesOrganizationSecretRepositories.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement"></a>

```java
import io.cdktn.providers.github.codespaces_organization_secret_repositories.CodespacesOrganizationSecretRepositories;

CodespacesOrganizationSecretRepositories.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource"></a>

```java
import io.cdktn.providers.github.codespaces_organization_secret_repositories.CodespacesOrganizationSecretRepositories;

CodespacesOrganizationSecretRepositories.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.codespaces_organization_secret_repositories.CodespacesOrganizationSecretRepositories;

CodespacesOrganizationSecretRepositories.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodespacesOrganizationSecretRepositories.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodespacesOrganizationSecretRepositories resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodespacesOrganizationSecretRepositories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodespacesOrganizationSecretRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodespacesOrganizationSecretRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIdsInput">selectedRepositoryIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `selectedRepositoryIdsInput`<sup>Optional</sup> <a name="selectedRepositoryIdsInput" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIdsInput"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIds();
```

- *Type:* java.util.List<java.lang.Number>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodespacesOrganizationSecretRepositoriesConfig <a name="CodespacesOrganizationSecretRepositoriesConfig" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.Initializer"></a>

```java
import io.cdktn.providers.github.codespaces_organization_secret_repositories.CodespacesOrganizationSecretRepositoriesConfig;

CodespacesOrganizationSecretRepositoriesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretName(java.lang.String)
    .selectedRepositoryIds(java.util.List<java.lang.Number>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the existing secret. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | An array of repository ids that can access the organization secret. |
| <code><a href="#@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories#id CodespacesOrganizationSecretRepositories#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Name of the existing secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories#secret_name CodespacesOrganizationSecretRepositories#secret_name}

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIds();
```

- *Type:* java.util.List<java.lang.Number>

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories#selected_repository_ids CodespacesOrganizationSecretRepositories#selected_repository_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/codespaces_organization_secret_repositories#id CodespacesOrganizationSecretRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



